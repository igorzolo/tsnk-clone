import { z } from 'zod';
import type { TFunction } from 'i18next';

export const contactSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .min(2, t('contacts.errors.nameMin'))
      .max(80, t('contacts.errors.nameMax')),
    email: z.string().email(t('contacts.errors.emailInvalid')),
    phone: z
      .string()
      .optional()
      .refine(
        (v) => !v || /^[\d\s+()-]{7,20}$/.test(v),
        t('contacts.errors.phoneInvalid'),
      ),
    message: z
      .string()
      .min(10, t('contacts.errors.messageMin'))
      .max(2000, t('contacts.errors.messageMax')),
  });

export type ContactFormData = z.infer<ReturnType<typeof contactSchema>>;