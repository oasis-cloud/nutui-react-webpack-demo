import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// import "./index.scss";
// import "@test/nutui-react/dist/style.css";
// import "@test/nutui-react/dist/styles/themes/default.scss";
// import "@test/nutui-react/dist/packages/button/index.scss";
// import "@test/nutui-react/dist/packages/avatar/index.scss";
import {
  TextArea,
  Input,
  Rate,
  Button,
  FixedNav,
  Divider,
  Avatar,
  Price,
  Drag,
  Range,
  Steps,
  CircleProgress,
  NavBar,
  Tabbar,
  InputNumber,
  Elevator,
  Checkbox,
  CheckboxGroup,
  Tag,
  Badge,
  Barrage,
  Icon,
  AnimatingNumbers,
} from "@test/nutui-react";
const AnimatingNumbersDemo = () => {
  const [endNumber, setEndNumer] = useState("1570.99");
  useEffect(() => {
    setInterval(() => {
      setEndNumer(
        `${Math.floor(Math.random() * 999999)}.${Math.floor(
          Math.random() * 89 + 10
        )}`
      );
    }, 30000);
  }, []);
  return (
    <>
      <div className="demo">
        <h2>CountUp-基础用法</h2>
        <AnimatingNumbers.CountUp endNumber="678.94" />
        <h2>CountUp-自定义样式，动态修改数据（需要指定最大位数）</h2>
        <AnimatingNumbers.CountUp
          endNumber={endNumber}
          easeSpeed={1.2}
          maxLen={6}
          className="custom-coutup"
        />
      </div>
    </>
  );
};

const CheckBoxDemo1 = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(["1"]);
  return (
    <CheckboxGroup
      checkedValue={checkboxgroup1}
      onChange={(value) => {
        console.log(value);
        setCheckboxgroup1(value);
      }}
    >
      <Checkbox checked={false} label="1">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="2">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="3">
        组合复选框
      </Checkbox>
      <Checkbox checked={false} label="4">
        组合复选框
      </Checkbox>
    </CheckboxGroup>
  );
};
const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Checkbox
        textPosition={"left"}
        label={"复选框"}
        checked={checked}
      ></Checkbox>
      <Checkbox
        textPosition={"right"}
        label={"复选框"}
        checked={false}
      ></Checkbox>
    </>
  );
};
const App = () => {
  const dataList = [
    {
      title: "A",
      list: [
        {
          name: "安徽",
          id: 1,
        },
      ],
    },
    {
      title: "B",
      list: [
        {
          name: "北京",
          id: 2,
        },
      ],
    },
    {
      title: "G",
      list: [
        {
          name: "广西",
          id: 3,
        },
        {
          name: "广东",
          id: 4,
        },
      ],
    },
    {
      title: "H",
      list: [
        {
          name: "湖南",
          id: 5,
        },
        {
          name: "湖北",
          id: 6,
        },
        ,
        {
          name: "琥珀",
          id: 7,
        },
      ],
    },
  ];
  const clickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item));
  };

  const clickIndex = (key: string) => {
    console.log(key);
  };
  const navList = [
    {
      id: 1,
      text: "首页",
      icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
    },
    {
      id: 2,
      text: "分类",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
    },
    {
      id: 3,
      text: "购物车",
      num: 2,
      icon: "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
    },
    {
      id: 4,
      text: "我的",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
    },
  ];
  const [visible, setVisible] = useState(false);
  const change = (value: boolean) => {
    setVisible(value);
  };
  const selected = (item: any, event: MouseEvent) => {
    console.log(item, event);
  };
  let list = [
    "画美不看",
    "不明觉厉",
    "喜大普奔",
    "男默女泪",
    "累觉不爱",
    "爷青结-",
  ];
  const barrageRef = useRef(null);
  // const addBarrage = () => {
  //   let n = Math.random();
  //   if (barrageRef.current) {
  //     barrageRef.current.add("随机——" + String(n).substr(2, 10));
  //   }
  // };
  return (
    <div style={{ display: "flex" }}>
      {/*<Icon></Icon>*/}
      <div>
        <AnimatingNumbersDemo></AnimatingNumbersDemo>
      </div>
      <CheckBoxDemo1></CheckBoxDemo1>
    </div>
  );
  // return (
  //   <div>
  //     <div>
  //       <Barrage ref={barrageRef} barrageList={list}></Barrage>
  //     </div>
  //     <div>
  //       <Badge value={8}>
  //         <Avatar icon="my" shape="square"></Avatar>
  //       </Badge>
  //       <Badge value={76}>
  //         <Avatar icon="my" shape="square"></Avatar>
  //       </Badge>
  //       <Badge value="NEW">
  //         <Avatar icon="my" shape="square"></Avatar>
  //       </Badge>
  //       <Badge dot>
  //         <Avatar icon="my" shape="square"></Avatar>
  //       </Badge>
  //     </div>
  //     <div>
  //       <Tag type="primary">标签</Tag>
  //       <Tag type="success">标签</Tag>
  //       <Tag type="danger">标签</Tag>
  //       <Tag type="warning">标签</Tag>
  //     </div>
  //     <div>
  //       <CheckBoxDemo1></CheckBoxDemo1>
  //     </div>
  //     <div>
  //       <CheckBoxDemo></CheckBoxDemo>
  //     </div>
  //     <div>
  //       <Input label="文本" defaultValue="禁止修改" disabled={true} />
  //       <Input label="文本" defaultValue="readonly只读" readonly={true} />
  //       <TextArea defaultValue="test" />
  //     </div>
  //     <div>
  //       <Rate modelValue={3}></Rate>
  //     </div>
  //     <div>
  //       <FixedNav
  //         navList={navList}
  //         activeText="基础用法"
  //         overlay={true}
  //         position={{ top: "70px" }}
  //         change={change}
  //         visible={visible}
  //         selected={selected}
  //       />
  //     </div>
  //     <div>
  //       <Elevator
  //         indexList={dataList}
  //         height="260"
  //         clickItem={(key: string, item: any) => clickItem(key, item)}
  //         clickIndex={(key: string) => clickIndex(key)}
  //       ></Elevator>
  //     </div>
  //     <div>
  //       <InputNumber modelValue={1} />
  //     </div>
  //     <div>
  //       <NavBar
  //         title="订单详情"
  //         icon="share"
  //         leftShow={true}
  //         onClickTitle={(e) => alert("标题")}
  //         onClickBack={(e) => alert("返回")}
  //         onClickIcon={(e) => alert("icon")}
  //       ></NavBar>
  //       <NavBar
  //         title="浏览记录"
  //         desc="清空"
  //         leftShow={true}
  //         onClickTitle={(e) => alert("标题")}
  //         onClickBack={(e) => alert("返回")}
  //         onClickClear={(e) => alert("清空")}
  //       ></NavBar>
  //     </div>
  //     <div>
  //       <Range modelValue={40}></Range>
  //     </div>
  //     <div>
  //       <CircleProgress progress={10}></CircleProgress>
  //     </div>
  //     <Button type="primary">主要按钮</Button>
  //     <Button type="info">信息按钮</Button>
  //     <Button type="default">默认按钮</Button>
  //     <Button type="danger">危险按钮</Button>
  //     <Button type="warning">警告按钮</Button>
  //     <Button type="success">成功按钮</Button>
  //     <Avatar shape="square"></Avatar>
  //     <Avatar shape="round"></Avatar>
  //     <Icon name="dongdong"></Icon>
  //     <Icon name="JD"></Icon>
  //     <Icon
  //       size="40"
  //       name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
  //     ></Icon>
  //     <Price price={0} needSymbol={false} thousands={true} />
  //     <Divider />
  //     <Drag>
  //       <div className="touch-dom">触摸移动</div>
  //     </Drag>
  //   </div>
  // );
};
ReactDOM.render(<App />, document.querySelector("#app"));
