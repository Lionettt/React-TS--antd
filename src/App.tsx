import {Button , ButtonSize , ButtonType} from "./components/button"

function App() {
  return (
    <div>
    <Button>Hello</Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> 2</Button>
    <Button btnType={ButtonType.Link} href="www.baidu.com"> Link </Button>
    </div>
  );
}

export default App;
