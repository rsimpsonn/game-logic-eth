const RightSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/658f7d9b0f971624fe683fafc1766536/raw/d2fdd7450835319f6b12ddd526b8c0c86a4b0e1c/bear-rightsidestraight.svg"
    }
  />
);

const RightSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/2490fe6b05bd3cfea1110bf5f0fd3460/raw/f68d1c93c64580bc73a8097fdf43198e9e889599/bear-rightsideright.svg"
    }
  />
);

const RightSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/7f297f36120ba0c94e13d5c70851984c/raw/fdfcb75ed7850443f2794408e010195037ee3304/bear-rightsideleft.svg"
    }
  />
);

const FrontSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/def6ef513fdea6369fa72466e9d0b564/raw/af08a8e8dd164d1e998531ff81e801d3e76fb5eb/bear-frontsidestraight.svg"
    }
  />
);

const FrontSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/a5d1c20f415c36da84a7fd8756933bd3/raw/bf553e3cea3f380d5b43eab4f77d22867ae45656/bear-frontsideright.svg"
    }
  />
);

const FrontSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/dac10bd9b85f00e37ec92d5d1ac4294c/raw/ed0f78f7499dc9743b5f54f0217ca50a52a1ca95/bear-frontsideleft.svg"
    }
  />
);

const LeftSideStraight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/658f7d9b0f971624fe683fafc1766536/raw/d2fdd7450835319f6b12ddd526b8c0c86a4b0e1c/bear-rightsidestraight.svg"
    }
  />
);

const LeftSideRight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/2490fe6b05bd3cfea1110bf5f0fd3460/raw/f68d1c93c64580bc73a8097fdf43198e9e889599/bear-rightsideright.svg"
    }
  />
);

const LeftSideLeft = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/7f297f36120ba0c94e13d5c70851984c/raw/fdfcb75ed7850443f2794408e010195037ee3304/bear-rightsideleft.svg"
    }
  />
);

const BackSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/05b63e5bb89147b718dc99faba532081/raw/502665daf163aa176d6d0103b215bcfa1577407b/bear-backsidestraight.svg"
    }
  />
);

const BackSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/221383dc4235996d4f2f523daf770973/raw/3d4004673d08c667431ee36b06c3b7871f289ac6/bear-backsideright.svg"
    }
  />
);

const BackSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/c5bc53bafec270b0c7cb2934febe6248/raw/20a7320d9c064d0630e5da0c99de8e6d8d48c07e/bear-backsideleft.svg"
    }
  />
);

const Right = [
  RightSideStraight,
  RightSideRight,
  RightSideStraight,
  RightSideLeft
];

const Forward = [
  FrontSideStraight,
  FrontSideRight,
  FrontSideStraight,
  FrontSideLeft
];

const Back = [BackSideStraight, BackSideRight, BackSideStraight, BackSideLeft];

const Left = [LeftSideStraight, LeftSideRight, LeftSideStraight, LeftSideLeft];

export { Right, Forward, Left, Back };
