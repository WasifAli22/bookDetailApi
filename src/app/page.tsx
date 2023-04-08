import Home from "./views/Home"

export default function App() {
  return (<>
    {/* @ts-expect-error Async Server Component */}

    <Home />
  </>
  )
}