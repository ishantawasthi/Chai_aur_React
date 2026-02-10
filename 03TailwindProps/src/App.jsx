  
   import Card from "./components/card"

    function App( ) { 
          
      let myObj={
          name: "Ishant",
          age: 22
      }
       

       let newArr=[1,2,3,4,5]
        return (
    <>
          <h1 className="bg-green-400 text-black rounded-3xl mt-2 "> Tailwind Test </h1>
   
       

        {/*    <Card username="ChaiaurReact"  />  */}
        {/*    <Card username="ChaiaurReact"  myobj={myObj}  />  */}


        {/*    <Card username="ChaiaurReact"  />  */}
          <Card username="ChaiaurReact"  />
            <Card   username="Ishant" />
         
       
    </>
  )
}

export default App
