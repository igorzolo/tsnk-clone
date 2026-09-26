import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

export default function Home() {
  return (
    <Container className="py-20">
      <SectionTitle
        title="Досмотровое оборудование ТСНК"
        subtitle="Российский производитель систем безопасности для транспорта, промышленности и государственных объектов."
        align="center"
      />
    </Container>
  );
}