'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, '姓名至少需要2個字'),
  clinicName: z.string().min(2, '診所名稱至少需要2個字'),
  email: z.string().email('請輸入有效的電子郵件'),
  phone: z.string().min(10, '請輸入有效的電話號碼'),
  service: z.string().min(1, '請選擇感興趣的服務'),
  message: z.string().min(10, '訊息至少需要10個字'),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: '請同意隱私權政策',
  }),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  { id: 'website', name: '專業網站設計' },
  { id: 'marketing', name: 'AI 驅動數位行銷' },
  { id: 'social', name: '社群媒體經營' },
  { id: 'booking', name: '線上預約系統' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('提交失敗');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          姓名
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700">
          診所名稱
        </label>
        <input
          type="text"
          id="clinicName"
          {...register('clinicName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        {errors.clinicName && <p className="mt-1 text-sm text-red-600">{errors.clinicName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          電子郵件
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          電話號碼
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          感興趣的服務
        </label>
        <select
          id="service"
          {...register('service')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        >
          <option value="">請選擇服務</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          訊息內容
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agreeToPrivacy"
            type="checkbox"
            {...register('agreeToPrivacy')}
            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agreeToPrivacy" className="font-medium text-gray-700">
            我同意
            <a href="/privacy" className="text-red-600 hover:text-red-500">
              隱私權政策
            </a>
          </label>
        </div>
      </div>
      {errors.agreeToPrivacy && (
        <p className="mt-1 text-sm text-red-600">{errors.agreeToPrivacy.message}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
        >
          {isSubmitting ? '提交中...' : '提交表單'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-600">表單提交成功！我們會盡快與您聯繫。</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-2 text-sm text-red-600">提交失敗，請稍後再試。</p>
      )}
    </form>
  );
} 