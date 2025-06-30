"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Plus,
    Search,
    Filter,
    Edit,
    Trash2,
    MoreHorizontal,
    DollarSign,
    Gift,
    ImageIcon,
    Save,
    X,
    Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useCreateServiceMutation, useFindAllServiceQuery, useUpdateServiceMutation } from "@/redux/features/service/serviceApi"
import { useFindAllRoomsQuery } from "@/redux/features/room/room.api"
import { IRoom } from "@/app/types/room.interface"
import toast from "react-hot-toast"

// Validation schema
const serviceSchema = z.object({
    name: z.string().min(1, "Service name is required"),
    description: z.string().optional(),
    pricePerDay: z.number().min(0, "Price must be 0 or greater"),
    isServiceFree: z.boolean(),
    image: z.string().optional(),
})

type ServiceFormData = z.infer<typeof serviceSchema>

interface IService {
    _id?: string
    name: string
    image: string
    description?: string
    pricePerDay: number
    isServiceFree: boolean
    isDeleted?: boolean
}

interface Room {
    _id: string
    name: string
    roomNumber: string
}

export default function ServicesPage() {

    const [createService]= useCreateServiceMutation();
    const [updateService,{isLoading:updateLoading, }]= useUpdateServiceMutation();

    const {data:roomsData}= useFindAllRoomsQuery(undefined)
    const {data: servicesData,isLoading}=useFindAllServiceQuery(undefined)

   
   
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState("all")
    const [selectedRoom, setSelectedRoom] = useState("all")
    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectedService, setSelectedService] = useState<IService | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string>("")
    const [uploading, setUploading] = useState(false)

    // React Hook Form for Add Service
    const addForm = useForm<ServiceFormData>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            name: "",
            description: "",
            pricePerDay: 0,
            isServiceFree: false,
            image: "",
        },
    })

    // React Hook Form for Edit Service
    const editForm = useForm<ServiceFormData>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            name: "",
            description: "",
            pricePerDay: 0,
            isServiceFree: false,
            image: "",
        },
    })

    // Watch isServiceFree to automatically set price to 0
    const watchAddServiceFree = addForm.watch("isServiceFree")
    const watchEditServiceFree = editForm.watch("isServiceFree")

    useEffect(() => {
        if (watchAddServiceFree) {
            addForm.setValue("pricePerDay", 0)
        }
    }, [watchAddServiceFree, addForm])

    useEffect(() => {
        if (watchEditServiceFree) {
            editForm.setValue("pricePerDay", 0)
        }
    }, [watchEditServiceFree, editForm])




  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      alert("File size must be less than 5MB");
      e.target.value = ""; // ইনপুট রিসেট করতে পারেন
      setImageFile(null);
      setImagePreview('');
      return;
    }

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};



    // Remove image
    const handleRemoveImage = () => {
        setImageFile(null)
        setImagePreview("")
    }

    // Add service form submission
    const onAddSubmit = async (data: ServiceFormData) => {
        try {
            const formData = new FormData()

            // Append image if selected
            if (imageFile) {
                formData.append("image", imageFile)
            }

            // Append all form data fields
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value as string)
            })

            const response = await createService(formData).unwrap();

          
            if (response.success) {
               
                setShowAddModal(false)
                addForm.reset()
                handleRemoveImage()
                toast.success("Service added successfully!")
            } else {
                toast.error("Failed to add service")
            }
        } catch (error) {
            console.error("Error adding service:", error)
            alert("Error adding service")
        }
    }


    // Edit service form submission
const onEditSubmit = async (data: ServiceFormData) => {
    if (!selectedService?._id) return;

    try {
        const formData = new FormData();

        // Append image if selected
        if (imageFile) {
            formData.append("image", imageFile);
        }

        // Append other form fields
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value as string);
        });

        const response = await updateService({ id: selectedService._id, formData });

        if ('data' in response && response.data?.success) {
           
            setShowEditModal(false);
            editForm.reset();
            handleRemoveImage();
            setSelectedService(null);
            toast.success("Service updated sucessfully")
        } else {
            toast.error("Failed to update service");
        }
    } catch (error) {
        console.error("Error updating service:", error);
        alert("Error updating service");
    }
};


    const handleDeleteService = async (serviceId: string) => {
        if (!confirm("Are you sure you want to delete this service?")) return

        try {
            const response = await fetch(`https://royal-place-server.vercel.app/api/services/${serviceId}`, {
                method: "DELETE",
            })

            const result = await response.json()
            if (result.success) {
                
                alert("Service deleted successfully!")
            } else {
                alert("Failed to delete service")
            }
        } catch (error) {
            console.error("Error deleting service:", error)
            alert("Error deleting service")
        }
    }

    const openEditModal = (service: IService) => {
        setSelectedService(service)
        editForm.reset({
            name: service.name,
           
            description: service.description || "",
            pricePerDay: service.pricePerDay,
            isServiceFree: service.isServiceFree,
            image: service.image || "",
        })
        if (service.image) {
            setImagePreview(service.image)
        }
        setShowEditModal(true)
    }

    const closeAddModal = () => {
        setShowAddModal(false)
        addForm.reset()
        handleRemoveImage()
    }

    const closeEditModal = () => {
        setShowEditModal(false)
        editForm.reset()
        handleRemoveImage()
        setSelectedService(null)
    }

 

    const filteredServices = servicesData?.data?.filter((service: { name: string; description: string; isServiceFree: any }) => {
        const matchesSearch =
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description?.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesType =
            filterType === "all" ||
            (filterType === "free" && service.isServiceFree) ||
            (filterType === "paid" && !service.isServiceFree)

        const matchesRoom = selectedRoom === "all" ;

        return matchesSearch && matchesType && matchesRoom
    })

    const totalServices = servicesData?.data?.length
    const freeServices = servicesData?.data?.filter((s: { isServiceFree: boolean }) => s.isServiceFree).length
    const paidServices = servicesData?.data?.filter((s: { isServiceFree: any }) => !s.isServiceFree).length
    const totalRevenue = servicesData?.data?.reduce((sum: any, s: { isServiceFree: any; pricePerDay: any }) => sum + (s.isServiceFree ? 0 : s.pricePerDay), 0)

    return (
        <div className="min-h-screen ">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative ">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Services Management</h1>
                        <p className="text-slate-300">Manage hotel services and amenities</p>
                    </div>
                    <Button onClick={() => setShowAddModal(true)} className="bg-orange-500 hover:bg-orange-600 mt-4 md:mt-0">
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Service
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm">Total Services</p>
                                    <p className="text-2xl font-bold text-white">{totalServices}</p>
                                </div>
                                <div className="bg-blue-500/20 p-3 rounded-full">
                                    <DollarSign className="w-6 h-6 text-blue-400" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm">Free Services</p>
                                    <p className="text-2xl font-bold text-white">{freeServices}</p>
                                </div>
                                <div className="bg-green-500/20 p-3 rounded-full">
                                    <Gift className="w-6 h-6 text-green-400" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm">Paid Services</p>
                                    <p className="text-2xl font-bold text-white">{paidServices}</p>
                                </div>
                                <div className="bg-orange-500/20 p-3 rounded-full">
                                    <DollarSign className="w-6 h-6 text-orange-400" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm">Daily Revenue</p>
                                    <p className="text-2xl font-bold text-white">${totalRevenue}</p>
                                </div>
                                <div className="bg-purple-500/20 p-3 rounded-full">
                                    <DollarSign className="w-6 h-6 text-purple-400" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 mb-6">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                                    <Input
                                        placeholder="Search services..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
                                    />
                                </div>
                            </div>
                            <Select value={filterType} onValueChange={setFilterType}>
                                <SelectTrigger className="w-full md:w-48 bg-slate-700/50 border-slate-600 text-white focus:border-orange-500 focus:ring-orange-500/20">
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue placeholder="Filter by type" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-700">
                                    <SelectItem value="all" className="text-white hover:bg-slate-700">
                                        All Services
                                    </SelectItem>
                                    <SelectItem value="free" className="text-white hover:bg-slate-700">
                                        Free Services
                                    </SelectItem>
                                    <SelectItem value="paid" className="text-white hover:bg-slate-700">
                                        Paid Services
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {/* <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                                <SelectTrigger className="w-full md:w-48 bg-slate-700/50 border-slate-600 text-white focus:border-orange-500 focus:ring-orange-500/20">
                                    <SelectValue placeholder="Filter by room" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-700">
                                    <SelectItem value="all" className="text-white hover:bg-slate-700">
                                        All Rooms
                                    </SelectItem>
                                    {roomsData?.data?.map((room:IRoom) => (
                                        <SelectItem key={room._id} value={room._id} className="text-white hover:bg-slate-700">
                                            {room.title} ({room.roomNumber})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select> */}
                        </div>
                    </CardContent>
                </Card>

                {/* Services Table */}
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                    <CardHeader>
                        <CardTitle className="text-white">Services List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <div className="flex items-center justify-center h-64">
                                <div className="text-slate-400">Loading services...</div>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-slate-700">
                                        <TableHead className="text-slate-300">Service</TableHead>
                                        
                                        <TableHead className="text-slate-300">Price/Day</TableHead>
                                        <TableHead className="text-slate-300">Type</TableHead>
                                        <TableHead className="text-slate-300">Description</TableHead>
                                        <TableHead className="text-slate-300">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredServices?.map((service:IService) => (
                                        <TableRow key={service._id} className="border-slate-700">
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    {service.image ? (
                                                        <img
                                                            src={service.image || "/placeholder.svg"}
                                                            alt={service.name}
                                                            className="w-10 h-10 rounded-lg object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                                                            <ImageIcon className="w-5 h-5 text-slate-400" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="text-white font-medium">{service.name}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            
                                            <TableCell>
                                                <span className="text-white font-semibold">
                                                    {service.isServiceFree ? "Free" : `$${service.pricePerDay}`}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={
                                                        service.isServiceFree
                                                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                                                            : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                                    }
                                                >
                                                    {service.isServiceFree ? "Free" : "Paid"}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-slate-300 max-w-xs truncate">
                                                {service.description || "No description"}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                                                        <DropdownMenuItem
                                                            onClick={() => openEditModal(service)}
                                                            className="text-white hover:bg-slate-700"
                                                        >
                                                            <Edit className="mr-2 h-4 w-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => service._id && handleDeleteService(service._id)}
                                                            className="text-red-400 hover:bg-slate-700"
                                                        >
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Add Service Modal */}
            <Dialog open={showAddModal} onOpenChange={closeAddModal}>
                <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-orange-400">Add New Service</DialogTitle>
                    </DialogHeader>
                    <Form {...addForm}>
                        <form onSubmit={addForm.handleSubmit(onAddSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={addForm.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Service Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-slate-700/50 border-slate-600 text-white"
                                                    placeholder="Enter service name"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                               
                            </div>

                            {/* Single Image Upload */}
                            <div className="space-y-2">
                                <Label className="text-slate-200">Service Image</Label>
                                <Input type="file" accept="image/*" className="hidden" id="image-upload" onChange={handleImageChange} />
                                <Label
                                    htmlFor="image-upload"
                                    className="cursor-pointer flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    <Upload className="w-5 h-5" />
                                    Click to upload image
                                </Label>
                                {imagePreview && (
                                    <div className="relative w-32 h-32">
                                        <img
                                            src={imagePreview || "/placeholder.svg"}
                                            className="w-full h-full object-cover rounded-lg"
                                            alt="Preview"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full hover:bg-red-600"
                                        >
                                            <X className="h-3 w-3 text-white" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <FormField
                                control={addForm.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-200">Description (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="bg-slate-700/50 border-slate-600 text-white"
                                                placeholder="Enter service description"
                                                rows={3}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={addForm.control}
                                    name="pricePerDay"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Price per Day ($)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    className="bg-slate-700/50 border-slate-600 text-white"
                                                    placeholder="0.00"
                                                    disabled={watchAddServiceFree}
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={addForm.control}
                                    name="isServiceFree"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Service Type</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2 p-3 bg-slate-700/30 rounded-lg">
                                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                                    <Label className="text-slate-300">{field.value ? "Free Service" : "Paid Service"}</Label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    type="button"
                                    onClick={closeAddModal}
                                    variant="outline"
                                    className="flex-1 bg-slate-700/30 border-slate-600 text-white hover:bg-slate-700/50"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={uploading}
                                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {uploading ? "Uploading..." : "Add Service"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            {/* Edit Service Modal */}
            <Dialog open={showEditModal} onOpenChange={closeEditModal}>
                <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-orange-400">Edit Service</DialogTitle>
                    </DialogHeader>
                    <Form {...editForm}>
                        <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={editForm.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Service Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="bg-slate-700/50 border-slate-600 text-white"
                                                    placeholder="Enter service name"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                               
                            </div>

                            {/* Single Image Upload */}
                            <div className="space-y-2">
                                <Label className="text-slate-200">Service Image</Label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="edit-image-upload"
                                    onChange={handleImageChange}
                                />
                                <Label
                                    htmlFor="edit-image-upload"
                                    className="cursor-pointer flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    <Upload className="w-5 h-5" />
                                    Click to upload new image
                                </Label>
                                {imagePreview && (
                                    <div className="relative w-32 h-32">
                                        <img
                                            src={imagePreview || "/placeholder.svg"}
                                            className="w-full h-full object-cover rounded-lg"
                                            alt="Preview"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full hover:bg-red-600"
                                        >
                                            <X className="h-3 w-3 text-white" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <FormField
                                control={editForm.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-200">Description (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="bg-slate-700/50 border-slate-600 text-white"
                                                placeholder="Enter service description"
                                                rows={3}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={editForm.control}
                                    name="pricePerDay"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Price per Day ($)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    className="bg-slate-700/50 border-slate-600 text-white"
                                                    placeholder="0.00"
                                                    disabled={watchEditServiceFree}
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={editForm.control}
                                    name="isServiceFree"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-200">Service Type</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2 p-3 bg-slate-700/30 rounded-lg">
                                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                                    <Label className="text-slate-300">{field.value ? "Free Service" : "Paid Service"}</Label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    type="button"
                                    onClick={closeEditModal}
                                    variant="outline"
                                    className="flex-1 bg-slate-700/30 border-slate-600 text-white hover:bg-slate-700/50"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={updateLoading}
                                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {updateLoading ? "Uploading..." : "Update Service"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
