"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Header with Glass Tag */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Glass Tag */}
          <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 w-fit">
            <span className="text-sm font-medium text-white">ارتباط با ما</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white text-center">
            با ما در تماس باشید
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-[#b3b3b3] text-center max-w-2xl">
            ما آماده پاسخگویی به سوالات و همکاری با شما هستیم
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Right Side - Contact Form */}
          <div className="bg-[#1B2546] rounded-3xl p-8 order-2 md:order-1">
            <h2 className="text-white text-3xl font-bold text-right mb-8">
              فرم تماس با ما
            </h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-right block">
                  نام و نام خانوادگی
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="نام کامل خود را وارد کنید"
                  className="bg-[#0f1628] border-[#2a3555] text-white placeholder:text-gray-400 text-right h-12"
                  dir="rtl"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-right block">
                  ایمیل
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="bg-[#0f1628] border-[#2a3555] text-white placeholder:text-gray-400 text-right h-12"
                  dir="rtl"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-right block">
                  شماره تماس
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="شماره خود را وارد کنید"
                  className="bg-[#0f1628] border-[#2a3555] text-white placeholder:text-gray-400 text-right h-12"
                  dir="rtl"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-white text-right block"
                >
                  پیام شما
                </Label>
                <Textarea
                  id="message"
                  placeholder="پیام خود را وارد کنید"
                  className="bg-[#0f1628] border-[#2a3555] text-white placeholder:text-gray-400 text-right min-h-32 resize-none"
                  dir="rtl"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0f1628] hover:bg-[#1a2438] text-white h-12 text-base font-medium"
              >
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* Left Side - Contact Info & Working Hours */}
          <div className="bg-[#1B2546] rounded-3xl p-8 order-1 md:order-2">
            <h2 className="text-white text-3xl font-bold text-right mb-8">
              اطلاعات تماس
            </h2>
            <div className="space-y-6 mb-10">
              {/* Phone */}
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="text-gray-300 text-sm mb-1">تلفن تماس</p>
                  <p className="text-white text-lg" dir="ltr">
                    02134465771
                  </p>
                </div>
                <div className="bg-purple-600/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="text-gray-300 text-sm mb-1">ایمیل</p>
                  <p className="text-white text-lg">info@businessfactory.ir</p>
                </div>
                <div className="bg-purple-600/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="text-gray-300 text-sm mb-1">آدرس</p>
                  <p className="text-white text-lg">
                    تهران، خیابان ولیعصر، پلاک 1312
                  </p>
                </div>
                <div className="bg-purple-600/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Working Hours inside Contact Info */}
            <div className="border-t border-gray-700/50 pt-8">
              <h2 className="text-white text-3xl font-bold text-right mb-6">
                ساعات کاری
              </h2>
              <div className="space-y-4 text-right">
                {/* Saturday to Wednesday */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-300" dir="ltr">
                    18:00 - 09:00
                  </p>
                  <p className="text-white">شنبه تا چهارشنبه</p>
                </div>

                {/* Thursday */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-300" dir="ltr">
                    14:00 - 09:00
                  </p>
                  <p className="text-white">پنجشنبه</p>
                </div>

                {/* Friday */}
                <div className="flex justify-between items-center">
                  <p className="text-red-400 font-medium">تعطیل</p>
                  <p className="text-white">جمعه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
