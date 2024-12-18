import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Talk with our Dev team</h1>
        <p className="text-gray-500 mb-6">
          Fill out your information, and our representative will reach out to you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-600">First Name *</label>
              <Input
                placeholder="e.g., John"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-600">Last Name *</label>
              <Input
                placeholder="Smith"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600">Company Email *</label>
            <Input
              placeholder="name@company.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-600">Phone Number *</label>
            <Input
              placeholder="+1 555 655 5656"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm text-gray-600">Country *</label>
            <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-600">What would you like to discuss?</label>
            <Textarea
              placeholder="Tell us about your team, project, or any questions you have."
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
