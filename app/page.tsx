export default function Home() {
  let result = [1,2,3]
  return (
   <div>
    {
      result.map(v => v + 1).reduce((prev, curr) => prev + curr)
    }
   </div>
  )
}
