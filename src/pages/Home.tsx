type Props = {}

function Home({ }: Props) {
  return (
    <main className="page flex flex-col lg:flex-row">
      <section className="bg-pink-200 lg:basis-1/4">
        Groups
      </section>
      <section className="bg-teal-200 lg:basis-1/2">
        Feed
      </section>
      {/* <article className="prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
        <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
      </article> */}
      <section className="bg-orange-200 lg:basis-1/4">
        Users
      </section>
    </main>
  )
}

export default Home