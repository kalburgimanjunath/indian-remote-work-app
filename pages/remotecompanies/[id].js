import { useRouter } from 'next/router';
export default function index({ params }) {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
}
