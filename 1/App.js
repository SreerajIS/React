const heading1 = React.createElement("h1",
    {
      id:"heading-1"
    },
    "Heading 1")
    const heading2 = React.createElement("h2",
    {
      id:"heading-2"
    },
    "Heading 2")
    const container = React.createElement("div",
    {
      id:"container",
      style: {
        color: "red",
        textAlingn:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
      }
    },
    [heading1,heading2])
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(container)