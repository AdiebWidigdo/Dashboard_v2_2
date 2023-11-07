import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenuSlide from "../components/drawer-menu-slide";
import PortalDrawer from "../components/portal-drawer";
import WalletMenu from "../components/wallet-menu";

const DashboardBasic: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenuSlideOpen, setDrawerMenuSlideOpen] = useState(false);
  const [isWalletMenuOpen, setWalletMenuOpen] = useState(false);

  const onDashboardClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onInventoryClick = useCallback(() => {
    navigate("/placed-bookmark");
  }, [navigate]);

  const onInventoryMemoryFragmentClick = useCallback(() => {
    navigate("/memory-fragment");
  }, [navigate]);

  const onInventoryAllItemClick = useCallback(() => {
    navigate("/ingame-inventory");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/logout");
  }, [navigate]);

  const openDrawerMenuSlide = useCallback(() => {
    setDrawerMenuSlideOpen(true);
  }, []);

  const closeDrawerMenuSlide = useCallback(() => {
    setDrawerMenuSlideOpen(false);
  }, []);

  const openWalletMenu = useCallback(() => {
    setWalletMenuOpen(true);
  }, []);

  const closeWalletMenu = useCallback(() => {
    setWalletMenuOpen(false);
  }, []);

  const onProfile1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onBookmarrkClick = useCallback(() => {
    navigate("/placed-bookmark");
  }, [navigate]);

  const onMemoryFragmentClick = useCallback(() => {
    navigate("/memory-fragment");
  }, [navigate]);

  const onAllItemClick = useCallback(() => {
    navigate("/ingame-inventory");
  }, [navigate]);

  const onProfileMenuContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onBookmark1ContainerClick = useCallback(() => {
    navigate("/memory-fragment");
  }, [navigate]);

  const onBookmark1Container1Click = useCallback(() => {
    navigate("/placed-bookmark");
  }, [navigate]);

  const onBookmark1Container2Click = useCallback(() => {
    navigate("/ingame-inventory");
  }, [navigate]);

  const onBxsdashboardIcon11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMditreasureChestIconClick = useCallback(() => {
    navigate("/placed-bookmark");
  }, [navigate]);

  const onIconamoonprofileFill4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-screen overflow-hidden flex flex-col items-start justify-start text-left text-5xs text-royalblue font-dm-sans sm:w-auto sm:[align-self:unset] sm:h-screen Ultrascreen:items-center Ultrascreen:justify-start">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px] lg:flex-1 md:flex-1 sm:flex-1 sm:gap-[8px] Ultrascreen:items-start Ultrascreen:justify-center">
          <div className="self-stretch flex flex-row items-start justify-start md:hidden sm:hidden">
            <nav className="m-0 self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-colors-white-100 w-60 flex flex-col items-start justify-between p-4 box-border">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-52 h-24 object-cover"
                  alt=""
                  src="/logo208x96-1@2x.png"
                />
                <div className="self-stretch h-24 hidden flex-col items-center justify-center">
                  <img
                    className="relative w-[133.1px] h-20 object-cover lg:w-[199px]"
                    alt=""
                    src="/terraquestlogobig-1@2x.png"
                  />
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.2]"
                  alt=""
                  src="/sparator.svg"
                />
                <div className="flex flex-col items-start justify-start p-2 gap-[16px]">
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded flex flex-row items-center justify-start gap-[8px]"
                    onClick={onDashboardClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard18.svg"
                    />
                    <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-dimgray text-left w-[104px] shrink-0 lg:text-base">
                      Dashboard
                    </b>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onProfileClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard1.svg"
                    />
                    <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-darkslategray-100 text-left w-[104px] shrink-0 lg:text-base">
                      Profile
                    </b>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard12.svg"
                    />
                    <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-darkslategray-100 text-left w-[104px] shrink-0 lg:text-base">
                      Inventory
                    </b>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconparksoliddownone.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard13.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Placed Bookmark
                    </div>
                    <div className="relative w-4 h-4 overflow-hidden shrink-0" />
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryMemoryFragmentClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard4.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Memory Fragment
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryAllItemClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard5.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      All item
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard6.svg"
                    />
                    <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-darkslategray-100 text-left w-[104px] shrink-0 lg:text-base">
                      Staking
                    </b>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-2 gap-[8px]">
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard7.svg"
                  />
                  <b className="relative text-xs tracking-[0.02em] leading-[100%] font-dm-sans text-darkslategray-100 text-left lg:text-base">
                    Catalog Character
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard8.svg"
                  />
                  <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-darkslategray-100 text-left w-[104px] shrink-0 lg:text-base">
                    Creators
                  </b>
                </button>
                <button
                  className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                  onClick={onLogoutClick}
                >
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard9.svg"
                  />
                  <b className="relative text-xs tracking-[0.02em] leading-[100%] inline-block font-dm-sans text-darkslategray-100 text-left w-[104px] shrink-0 lg:text-base">
                    Logout
                  </b>
                </button>
              </div>
            </nav>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-between lg:h-auto md:gap-[16px] sm:gap-[8px] sm:items-center sm:justify-between Ultrascreen:items-center Ultrascreen:justify-between Ultrascreen:gap-[0px] Ultrascreen:pb-3 Ultrascreen:box-border">
            <div className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-between py-2 px-4 lg:hidden md:flex sm:self-stretch sm:w-auto">
              <img
                className="relative w-[92.8px] h-14 object-cover"
                alt=""
                src="/terraquestlogobig-2@2x.png"
              />
              <img
                className="relative w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/iconamoonmenuburgerhorizontalbold.svg"
                onClick={openDrawerMenuSlide}
              />
            </div>
            <main className="self-stretch flex flex-col items-center justify-start py-0 px-4 gap-[24px] text-left text-base text-dimgray font-baloo-bhaina-2 lg:h-auto md:h-auto md:gap-[16px] sm:w-auto sm:[align-self:unset] sm:h-auto sm:gap-[8px] sm:pl-2 sm:pr-2 sm:box-border Ultrascreen:flex-1 Ultrascreen:items-center Ultrascreen:justify-start Ultrascreen:pl-4 Ultrascreen:pb-20 Ultrascreen:box-border">
              <section className="self-stretch flex flex-row items-center justify-end py-4 px-0 gap-[8px] md:hidden Ultrascreen:flex">
                <img
                  className="flex-1 relative rounded-2xl max-w-full overflow-hidden h-[13px]"
                  alt=""
                  src="/sparator1.svg"
                />
                <button className="cursor-pointer [border:none] py-0 px-6 bg-royalblue rounded-lg h-8 flex flex-row items-center justify-end box-border gap-[8px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/phplayfill.svg"
                  />
                  <b className="relative text-sm tracking-[0.02em] leading-[100%] font-hind text-colors-white-100 text-left md:hidden">
                    Play Game
                  </b>
                </button>
                <button
                  className="cursor-pointer [border:none] py-0 px-6 bg-dimgray rounded-lg h-8 flex flex-row items-center justify-end box-border gap-[8px]"
                  onClick={openWalletMenu}
                >
                  <img
                    className="relative rounded-sm w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard10.svg"
                  />
                  <b className="relative text-sm tracking-[0.02em] leading-[100%] font-hind text-colors-white-100 text-left md:hidden">
                    0x923749237493
                  </b>
                </button>
              </section>
              <div className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start p-6 lg:h-auto md:p-4 md:box-border sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-center sm:p-2 sm:box-border Ultrascreen:w-[1600px] Ultrascreen:flex-1 Ultrascreen:items-center Ultrascreen:justify-center Ultrascreen:pl-6 Ultrascreen:pb-6 Ultrascreen:box-border Ultrascreen:self-center">
                <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-4 gap-[16px] border-[2px] border-dashed border-whitesmoke-400 sm:gap-[0px] sm:py-2 sm:px-1 sm:box-border Ultrascreen:flex-1 Ultrascreen:items-center Ultrascreen:justify-center Ultrascreen:pl-10 Ultrascreen:pt-6 Ultrascreen:pr-10 Ultrascreen:box-border">
                  <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-4 gap-[16px] sm:hidden sm:pt-0 sm:pb-0 sm:box-border Ultrascreen:flex-1">
                    <div className="h-8 flex flex-row items-center justify-start gap-[8px]">
                      <h1
                        className="m-0 relative text-inherit leading-[120%] uppercase font-bold font-inherit md:text-base"
                        id="Dashboard"
                      >
                        Dashboard
                      </h1>
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 sm:w-6 sm:h-6"
                        alt=""
                        src="/phinfobold.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
                      <div className="self-stretch rounded-lg flex flex-col items-center justify-center bg-[url('/public/welcomebanner1@3x.png')] bg-cover bg-no-repeat bg-[top] text-5xl text-colors-white-100 Ultrascreen:h-[200px]">
                        <h1 className="m-0 relative text-inherit leading-[92.23px] uppercase font-bold font-inherit Ultrascreen:text-45xl">
                          Welcome to Terraquest
                        </h1>
                      </div>
                      <div
                        className="self-stretch rounded-lg bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:self-stretch sm:w-auto Ultrascreen:flex-1"
                        onClick={onProfile1Click}
                      >
                        <img
                          className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[120px] shrink-0 object-cover lg:h-40 md:h-[120px] sm:self-stretch sm:w-auto Ultrascreen:flex-1"
                          alt=""
                          src="/group-36891@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-center justify-start py-0 px-4 gap-[16px] sm:self-stretch sm:w-auto">
                          <div className="flex flex-row items-end justify-start p-2 gap-[8px]">
                            <img
                              className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/profileicon.svg"
                            />
                            <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                              Profile
                            </h2>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/nexticon.svg"
                            />
                          </div>
                          <h3 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[120%] font-bold font-dm-sans text-gray-100 sm:flex-1">
                            View your profile
                          </h3>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] sm:flex-col Ultrascreen:flex-1">
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch Ultrascreen:flex-1"
                          onClick={onBookmarrkClick}
                        >
                          <div className="self-stretch rounded-lg h-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/public/bannerbookmark1@3x.png')] bg-cover bg-no-repeat bg-[top] Ultrascreen:h-auto">
                            <img
                              className="relative w-[104px] h-[104px] object-cover Ultrascreen:w-[230px] Ultrascreen:h-[230px]"
                              alt=""
                              src="/achievementflag1-32@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
                            <div className="w-[145px] flex flex-row items-center justify-start p-2 box-border gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/bookmarkicon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                                Bookmark
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch Ultrascreen:flex-1"
                          onClick={onMemoryFragmentClick}
                        >
                          <div className="self-stretch rounded-lg h-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/public/bannermemoryfragment1@3x.png')] bg-cover bg-no-repeat bg-[top] Ultrascreen:h-auto">
                            <img
                              className="relative w-[104px] h-[104px] object-cover Ultrascreen:w-[230px] Ultrascreen:h-[230px]"
                              alt=""
                              src="/achievementflag1-33@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
                            <div className="flex-1 flex flex-row items-center justify-start p-2 gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/memoryfragmenticon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                                Memory Fragment
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch Ultrascreen:flex-1"
                          onClick={onAllItemClick}
                        >
                          <img
                            className="self-stretch rounded-lg max-w-full overflow-hidden h-[120px] shrink-0 object-cover Ultrascreen:flex-1"
                            alt=""
                            src="/bannerallitem1@2x.png"
                          />
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                            <div className="w-[235px] flex flex-row items-center justify-start p-2 box-border gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/inventoryicon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                                In-game inventory items
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-col items-center justify-start gap-[8px] sm:flex">
                    <img
                      className="relative rounded-xl w-[340px] h-[104px] object-cover"
                      alt=""
                      src="/bannerdashboardmobile@2x.png"
                    />
                    <div
                      className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                      onClick={onProfileMenuContainerClick}
                    >
                      <img
                        className="relative w-80 h-[58.7px] object-cover"
                        alt=""
                        src="/bookmarkimage@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                        <img
                          className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconamoonprofilefill1.svg"
                        />
                        <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                          Profile
                        </b>
                        <img
                          className="relative w-8 h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/icroundnavigatenext.svg"
                        />
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                      onClick={onBookmark1ContainerClick}
                    >
                      <div className="w-80 h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-4286@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="relative w-[156px] h-[58.7px] object-cover"
                          alt=""
                          src="/achievementflag1-2@2x.png"
                        />
                        <img
                          className="relative w-[156px] h-[58.7px] object-cover"
                          alt=""
                          src="/achievementflag1-3@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                        <img
                          className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconamoonprofilefill2.svg"
                        />
                        <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                          Memory Fragment
                        </b>
                        <img
                          className="relative w-8 h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/icroundnavigatenext.svg"
                        />
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                      onClick={onBookmark1Container1Click}
                    >
                      <div className="self-stretch h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-4285@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="self-stretch relative max-h-full w-[156px] object-cover"
                          alt=""
                          src="/achievementflag1-24@2x.png"
                        />
                        <img
                          className="self-stretch relative max-h-full w-[156px] object-cover"
                          alt=""
                          src="/achievementflag1-4@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                        <img
                          className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconamoonprofilefill3.svg"
                        />
                        <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                          Placed Bookmark
                        </b>
                        <img
                          className="relative w-8 h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/icroundnavigatenext.svg"
                        />
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                      onClick={onBookmark1Container2Click}
                    >
                      <img
                        className="relative w-80 h-[58.7px] object-cover"
                        alt=""
                        src="/bookmarkimage1@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                        <img
                          className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconamoonprofilefill3.svg"
                        />
                        <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                          All Item
                        </b>
                        <img
                          className="relative w-8 h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/icroundnavigatenext.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <section className="self-stretch flex flex-row items-end justify-between py-1 px-6 text-left text-xs text-darkgray font-baloo-bhaina-2 md:hidden sm:hidden Ultrascreen:items-start Ultrascreen:justify-between Ultrascreen:gap-[0px]">
              <div className="h-[15.1px] flex flex-row items-center justify-start gap-[16px] sm:gap-[4px]">
                <b className="relative leading-[133.2%] sm:text-3xs">
                  Privacy Policy
                </b>
                <img
                  className="relative w-0.5 h-[16.5px]"
                  alt=""
                  src="/sparator2.svg"
                />
                <b className="relative leading-[133.2%] sm:text-3xs">
                  Terms and Services
                </b>
              </div>
              <b className="relative leading-[133.2%] sm:text-3xs sm:text-right sm:flex-1">
                Copyright © 2023 TerraQuest
              </b>
            </section>
            <div className="self-stretch bg-colors-white-100 h-12 hidden flex-row items-center justify-between py-2 px-6 box-border md:flex sm:flex sm:gap-[8px] sm:pt-2 sm:pb-4 sm:box-border">
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/bxsdashboard.svg"
                  onClick={onBxsdashboardIcon11Click}
                />
                <b className="relative tracking-[0.02em] leading-[100%]">
                  Dashboard
                </b>
              </div>
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/mditreasurechest4.svg"
                  onClick={onMditreasureChestIconClick}
                />
                <b className="relative tracking-[0.02em] leading-[100%]">
                  Inventory
                </b>
              </div>
              <div className="hidden flex-col items-center justify-start">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/mditreasurechest5.svg"
                />
                <b className="relative tracking-[0.02em] leading-[100%]">
                  Logout
                </b>
              </div>
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/iconamoonprofilefill9.svg"
                  onClick={onIconamoonprofileFill4Click}
                />
                <b className="relative tracking-[0.02em] leading-[100%]">
                  Profile
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDrawerMenuSlideOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrawerMenuSlide}
        >
          <DrawerMenuSlide onClose={closeDrawerMenuSlide} />
        </PortalDrawer>
      )}
      {isWalletMenuOpen && (
        <PortalDrawer placement="Top" onOutsideClick={closeWalletMenu}>
          <WalletMenu onClose={closeWalletMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default DashboardBasic;
