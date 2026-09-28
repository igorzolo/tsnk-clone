import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import Seo from '../components/Seo';
import { contactSchema, type ContactFormData } from '../lib/validators';

export default function Contacts() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema(t)),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Форма отправлена:', data);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
  };

  const contacts = [
    {
      icon: Phone,
      label: t('contacts.phoneLabel'),
      value: '+7 (000) 000-00-00',
      href: 'tel:+70000000000',
    },
    {
      icon: Mail,
      label: t('contacts.emailLabel'),
      value: 'info@tsnk.ru',
      href: 'mailto:info@tsnk.ru',
    },
    {
      icon: MapPin,
      label: t('contacts.addressLabel'),
      value: t('contacts.address'),
    },
  ];

  return (
    <>
      <Seo
        title={t('contacts.title')}
        description={t('contacts.subtitle')}
      />
      <Container className="py-12 sm:py-16">
        <SectionTitle
          title={t('contacts.title')}
          subtitle={t('contacts.subtitle')}
          align="center"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-base font-medium text-slate-900 hover:text-brand-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-base font-medium text-slate-900">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">
                {t('contacts.scheduleTitle')}
              </h3>
              <dl className="mt-3 space-y-1.5 text-sm text-slate-600">
                <div className="flex justify-between">
                  <dt>{t('contacts.scheduleWeekdays')}</dt>
                  <dd className="font-medium text-slate-900">9:00 — 19:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t('contacts.scheduleSaturday')}</dt>
                  <dd className="font-medium text-slate-900">10:00 — 16:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t('contacts.scheduleSunday')}</dt>
                  <dd className="font-medium text-slate-500">
                    {t('contacts.scheduleDayOff')}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t('contacts.form.successTitle')}
                  </h3>
                  <p className="max-w-sm text-sm text-slate-600">
                    {t('contacts.form.successText')}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSent(false)}
                    className="mt-2"
                  >
                    {t('contacts.form.sendAnother')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input
                    id="name"
                    label={`${t('contacts.form.name')} *`}
                    placeholder={t('contacts.form.namePlaceholder')}
                    error={errors.name?.message}
                    {...register('name')}
                  />
                  <Input
                    id="email"
                    type="email"
                    label={`${t('contacts.form.email')} *`}
                    placeholder={t('contacts.form.emailPlaceholder')}
                    error={errors.email?.message}
                    {...register('email')}
                  />
                  <Input
                    id="phone"
                    label={t('contacts.form.phone')}
                    placeholder={t('contacts.form.phonePlaceholder')}
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <Textarea
                    id="message"
                    label={`${t('contacts.form.message')} *`}
                    placeholder={t('contacts.form.messagePlaceholder')}
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting
                      ? t('contacts.form.submitting')
                      : t('contacts.form.submit')}
                  </Button>
                  <p className="text-center text-xs text-slate-500">
                    {t('contacts.form.legal')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}