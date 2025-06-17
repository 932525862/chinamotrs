import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useState } from "react";

export function UserInfoDialog({ open, close }) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === "phone") setError(""); // Clear error on phone input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = parsePhoneNumberFromString(formData.phone);

        if (!phoneNumber || !phoneNumber.isValid()) {
            setError("Please enter a valid phone number.");
            return;
        }

        console.log("Submitted:", formData);
        close();
    };

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && close()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-green-600">Enter Your Details</DialogTitle>
                    <DialogDescription className="text-gray-500">
                        We’ll use your info to contact you if needed.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="grid gap-5 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="John Doe"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            className="border-gray-300 focus-visible:border-green-500 focus-visible:ring-0 focus-visible:outline-none"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            className="border-gray-300 focus-visible:border-green-500 focus-visible:ring-0 focus-visible:outline-none"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="+998901234567"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            className={`${error ? "border-red-500" : "border-gray-300"
                                } focus-visible:border-green-500 focus-visible:ring-0 focus-visible:outline-none`}
                        />
                        {error && (
                            <p className="text-sm text-red-500 transition-opacity duration-200">
                                {error}
                            </p>
                        )}
                    </div>

                    <DialogFooter className="mt-2">
                        <Button type="button" variant="outline" onClick={close}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-green-500 hover:bg-green-600">
                            Submit
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
