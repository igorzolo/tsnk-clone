import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { contactSchema, type ContactFormData } from '../lib/validators';
import FadeIn from '../components/ui/FadeIn';

const contacts = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (000) 000-00-00',
    href: 'tel:+70000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@tsnk.ru',
    href: 'mailto:info@tsnk.ru',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'Москва, ул. Примерная, 1',
  },
];

export default function Contacts() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Пока это мок. Позже заменим на реальный API-запрос.
    console.log('Форма отправлена:', data);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
  };

  return (
    <Container className="py-12 sm:py-16">
      <SectionTitle
        title="Свяжитесь с нами"
        subtitle="Ответим на вопросы, рассчитаем стоимость и поможем с выбором оборудования."
        align="center"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        {/* Левая колонка — контакты */}
        <FadeIn className="lg:col-span-2">
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
              Режим работы
            </h3>
            <dl className="mt-3 space-y-1.5 text-sm text-slate-600">
              <div className="flex justify-between">
                <dt>Пн–Пт</dt>
                <dd className="font-medium text-slate-900">9:00 — 19:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Сб</dt>
                <dd className="font-medium text-slate-900">10:00 — 16:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Вс</dt>
                <dd className="font-medium text-slate-500">выходной</dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        {/* Правая колонка — форма */}
        <FadeIn className="lg:col-span-3" delay={0.15}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Заявка отправлена
                </h3>
                <p className="max-w-sm text-sm text-slate-600">
                  Мы получили ваше сообщение и свяжемся с вами в течение рабочего
                  дня.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSent(false)}
                  className="mt-2"
                >
                  Отправить ещё одну
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  id="name"
                  label="Ваше имя *"
                  placeholder="Иван Иванов"
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  id="email"
                  type="email"
                  label="Email *"
                  placeholder="ivan@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
                <Input
                  id="phone"
                  label="Телефон"
                  placeholder="+7 (___) ___-__-__"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
                <Textarea
                  id="message"
                  label="Сообщение *"
                  placeholder="Расскажите, какое оборудование вас интересует…"
                  error={errors.message?.message}
                  {...register('message')}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Отправляем…' : 'Отправить заявку'}
                </Button>
                <p className="text-center text-xs text-slate-500">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
