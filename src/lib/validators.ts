import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(80, 'Слишком длинное имя'),
  email: z.string().email('Некорректный email'),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[\d\s+()-]{7,20}$/.test(v), 'Некорректный телефон'),
  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(2000, 'Сообщение слишком длинное'),
});

export type ContactFormData = z.infer<typeof contactSchema>;