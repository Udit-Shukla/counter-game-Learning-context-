import { Button, Card, Typography } from '@mui/material'
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
const App2 = () => {
    return (
        <RecoilRoot>
     <div style={{display:"flex",justifyContent:"center"}}>
      <Card style={{padding:20,width:500}}>
        <Typography variant ="h5">Welcome to Counter Game! </Typography>
        <br/>
        <Buttons/>
        <CountComponent/>
      </Card>
     </div>
     </RecoilRoot>
    )
}

function Buttons(){
    return <div style ={{display:"flex", justifyContent:"space-between" }}>
    <Increase />
    <Decrease />
    </div>
  }
  
  function Increase(){
    const setCount = useSetRecoilState(countState);
  return <div>
    <Button variant ={"contained"} onClick={()=>setCount(existingValue =>existingValue+1)}>Increase count</Button> 
  </div>
  }
  
  
  function Decrease(){
    const setCount = useSetRecoilState(countState);
    return <div>
      <Button variant ={"contained"} onClick={()=> setCount(existingValue =>existingValue - 1)}>Decrease count</Button> 
    </div>
    }
  
  function CountComponent(){
    const count = useRecoilValue(countState);
    return <div style={{display:"flex", justifyContent:"center"}}>
      <Typography variant ="h5">Count: {count}</Typography>
    </div>
  }

export default App2

const countState=atom({
    key:"countState",
    default:0
});
   