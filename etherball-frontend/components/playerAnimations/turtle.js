const RightSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/5a8e3e6fb2a7f50d6ce9e5524eed5df3/raw/f00738def30c52c3c605e0108180e4e9aa3aea91/turtle-rightsidestraight.svg"
    }
  />
);

const RightSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/fa12349f9b4a127e521a9cfaf93f6fad/raw/1a25367864845f0dcd38ef2add3c08bfcc5d3fbc/turtle-rightsideright.svg"
    }
  />
);

const RightSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/b7c4d2ca9d5307c009748ffadac50849/raw/48c11d2df4ff240ed03ba1414084424e65b2d789/turtle-rightsideleft.svg"
    }
  />
);

const FrontSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/2e1c5c737fea0250dcb44497f0de0c69/raw/3e058569fc7ccffb9315d002245ac49e431de273/turtle-frontsidestraight.svg"
    }
  />
);

const FrontSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/840efec442c2de4012054f96057363aa/raw/97349277c6b4efb7ceb0fb6b33cea333bc7446ca/turtle-frontsideright.svg"
    }
  />
);

const FrontSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/0dcd7d4037d089f0accd7a4181ed3bbf/raw/ce2fb223910a461a17f6995cf01e6b50c1f8023b/turtle-frontsideleft.svg"
    }
  />
);

const LeftSideStraight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/5a8e3e6fb2a7f50d6ce9e5524eed5df3/raw/f00738def30c52c3c605e0108180e4e9aa3aea91/turtle-rightsidestraight.svg"
    }
  />
);

const LeftSideRight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/fa12349f9b4a127e521a9cfaf93f6fad/raw/1a25367864845f0dcd38ef2add3c08bfcc5d3fbc/turtle-rightsideright.svg"
    }
  />
);

const LeftSideLeft = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/b7c4d2ca9d5307c009748ffadac50849/raw/48c11d2df4ff240ed03ba1414084424e65b2d789/turtle-rightsideleft.svg"
    }
  />
);

const BackSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/7580f4489ebdb58fefa8d25eee7e9de5/raw/1cceff9b692c2906e1940a2bef4b41fdb8f63126/turtle-backsidestraight.svg"
    }
  />
);

const BackSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/ae32f2ccdf4c6f81ebdfa2ffbabe041c/raw/d0015336b609c80b92d89c8ae9c82fe69acefcae/turtle-backsideright.svg"
    }
  />
);

const BackSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/b239e8718470338e9918348fbc3316b5/raw/9eef17fff17f6b62a73109089a553bcaacd9fe6e/turtle-backsideleft.svg"
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
