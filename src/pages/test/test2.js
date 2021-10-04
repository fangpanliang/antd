// import React from 'react';
// import 'antd/dist/antd.css';
// import { Upload, message, Button, Progress } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';


// const formData = useRef<FormDataProps>(new FormData());



// <Item label={'目标文件'}>
//   <div>
//     选择图片
//     <input
//       ref={uploadRef}
//       type="file"
//       accept="image/*"
//       multiple
//       onChange={handlePictureChange}
//     />
//   </div>
// </Item>


import React, { Component, createRef} from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.h1Ref = createRef();
  }
  componentDidMount() {
    console.log("React.createRef()");
    console.log(this.h1Ref.current);
  }
  render() {
    return <h1 ref={this.h1Ref}>Hello World!</h1>;
  }
}
export default App;