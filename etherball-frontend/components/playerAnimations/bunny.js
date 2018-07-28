const RightSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/3ffb318ea0edf707451a58573364b180/raw/f393c31f7a0f25959a2389bad681183180698a19/bunny-rightsidestraight.svg"
    }
  />
);

const RightSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/49a7602d3942852d543998821669b3d4/raw/b741aedb0a8c224b2c3bd1d0980e9aec16cda5f3/bunny-rightsideright.svg"
    }
  />
);

const RightSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/14f187360f3f136d4a05db6ae910acc0/raw/9521dc6d9555e74be3708cbb58b190a842d41c30/bunny-rightsideleft.svg"
    }
  />
);

const FrontSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/935de9a81e01693ff06a8e23df0054f2/raw/74210eb40a0f2c955d2fca283b991dda75a52546/bunny-frontsidestraight.svg"
    }
  />
);

const FrontSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/e1f66c09959b3be3070b66a618ad39a4/raw/458899f38134a52dc0f98bbe00b4ff1b128fcd51/bunny-frontsideright.svg"
    }
  />
);

const FrontSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/449fa894240cad2d75afd305821eb31e/raw/cf2d190a0ca3abd65e4310596aa0ddaf7099e900/bunny-frontsideleft.svg"
    }
  />
);

const LeftSideStraight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/3ffb318ea0edf707451a58573364b180/raw/f393c31f7a0f25959a2389bad681183180698a19/bunny-rightsidestraight.svg"
    }
  />
);

const LeftSideRight = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/49a7602d3942852d543998821669b3d4/raw/b741aedb0a8c224b2c3bd1d0980e9aec16cda5f3/bunny-rightsideright.svg"
    }
  />
);

const LeftSideLeft = (
  <img
    style={{ width: 60, height: 60, transform: "scaleX(-1)" }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/14f187360f3f136d4a05db6ae910acc0/raw/9521dc6d9555e74be3708cbb58b190a842d41c30/bunny-rightsideleft.svg"
    }
  />
);

const BackSideStraight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/4065e53602a0c82214027bebf9cc6b78/raw/278217bbfdb7c01b0069e37b02d2c4c983e0bd73/bunny-backsidestraight.svg"
    }
  />
);

const BackSideRight = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/c6c60d686b5f550c5c46686a43ca3d74/raw/02438f10fadf2024787ede421aeb54dcec9365e0/bunny-backsideright.svg"
    }
  />
);

const BackSideLeft = (
  <img
    style={{ width: 60, height: 60 }}
    src={
      "https://cdn.rawgit.com/rsimpsonn/32240410a299ce2fd03d81b4fe3715b9/raw/3b5a5928fd5270fc6b67a8f38ce753be1b442640/bunny-backsideleft.svg"
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
