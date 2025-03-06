"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
    agreeToPrivacy: false,
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "表單提交成功，我們會盡快與您聯繫",
        });
        setFormData({
          name: "",
          clinicName: "",
          email: "",
          phone: "",
          services: [],
          message: "",
          agreeToPrivacy: false,
        });
      } else {
        throw new Error(data.error || "提交失敗");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "提交失敗，請稍後再試",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      if (name === "agreeToPrivacy") {
        setFormData((prev) => ({
          ...prev,
          agreeToPrivacy: checkbox.checked,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          services: checkbox.checked
            ? [...prev.services, value]
            : prev.services.filter((service) => service !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-aideaMed-black mb-6">
              聯絡我們
            </h1>
            <p className="text-xl text-aideaMed-darkGray">
              讓我們了解您的需求，為您提供最適合的解決方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 聯絡資訊 */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-aideaMed-black mb-6">
                  聯絡資訊
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aideaMed-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-aideaMed-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-aideaMed-black mb-1">
                        地址
                      </h3>
                      <p className="text-aideaMed-darkGray">
                        台北市大安區信義路四段
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aideaMed-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-aideaMed-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-aideaMed-black mb-1">
                        電子郵件
                      </h3>
                      <p className="text-aideaMed-darkGray">
                        contact@aideamed.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aideaMed-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-aideaMed-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-aideaMed-black mb-1">
                        電話
                      </h3>
                      <p className="text-aideaMed-darkGray">
                        (02) 2345-6789
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 營業時間 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
                <h2 className="text-2xl font-bold text-aideaMed-black mb-6">
                  營業時間
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-aideaMed-darkGray">週一至週五</span>
                    <span className="text-aideaMed-darkGray">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-aideaMed-darkGray">週六</span>
                    <span className="text-aideaMed-darkGray">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-aideaMed-darkGray">週日</span>
                    <span className="text-aideaMed-darkGray">休息</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 聯絡表單 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-6">
                預約諮詢
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aideaMed-darkGray mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aideaMed-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="clinicName" className="block text-sm font-medium text-aideaMed-darkGray mb-1">
                    診所名稱
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aideaMed-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aideaMed-darkGray mb-1">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aideaMed-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-aideaMed-darkGray mb-1">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aideaMed-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-aideaMed-darkGray mb-2">
                    感興趣的服務
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="website"
                        value="website"
                        checked={formData.services.includes("website")}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-aideaMed-darkGray">網站設計</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="marketing"
                        value="marketing"
                        checked={formData.services.includes("marketing")}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-aideaMed-darkGray">數位行銷</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="social"
                        value="social"
                        checked={formData.services.includes("social")}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-aideaMed-darkGray">社群媒體管理</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="booking"
                        value="booking"
                        checked={formData.services.includes("booking")}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-aideaMed-darkGray">線上預約系統</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-aideaMed-darkGray mb-1">
                    訊息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aideaMed-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    <span className="text-sm text-aideaMed-darkGray">
                      我已閱讀並同意
                      <Link href="/privacy" className="text-aideaMed-red hover:underline">
                        隱私權政策
                      </Link>
                    </span>
                  </label>
                </div>

                {status.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-aideaMed-red text-white font-semibold py-3 px-6 rounded-lg hover:bg-aideaMed-darkRed transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "提交中..." : "提交表單"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 