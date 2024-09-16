
export default function Product({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>Test {params.id}</p>
    </div>
  );
}

