import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenuSlide from "../components/drawer-menu-slide";
import PortalDrawer from "../components/portal-drawer";
import WalletMenu from "../components/wallet-menu";

type ProfileBindWalletSuccess1Type = {
  onClose?: () => void;
};

const ProfileBindWalletSuccess1: FunctionComponent<
  ProfileBindWalletSuccess1Type
> = ({ onClose }) => {
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

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/profile-change-profile");
  }, [navigate]);

  const onBxsdashboardIcon11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMditreasureChestIconClick = useCallback(() => {
    navigate("/placed-bookmark");
  }, [navigate]);

  const onIconamoonprofileFillClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-screen overflow-hidden flex flex-col items-start justify-start text-left text-base text-dimgray font-dm-sans">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
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
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onDashboardClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard2.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Dashboard
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px]"
                    onClick={onProfileClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard15.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Profile
                    </div>
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
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Inventory
                    </div>
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
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Staking
                    </div>
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
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left lg:text-base">
                    Catalog Character
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard8.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Creators
                  </div>
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
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Logout
                  </div>
                </button>
              </div>
            </nav>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-1 relative gap-[16px] md:gap-[24px] md:items-center md:justify-between md:pb-0 md:box-border sm:items-center sm:justify-between sm:gap-[0px] sm:pb-0 sm:box-border">
            <div className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-between py-2 px-4 z-[0] lg:hidden md:flex sm:self-stretch sm:w-auto">
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
            <div className="self-stretch h-[695.5px] flex flex-col items-center justify-start py-0 px-4 box-border gap-[24px] z-[1] font-baloo-bhaina-2 md:h-auto sm:h-auto Ultrascreen:flex-1 Ultrascreen:pb-20 Ultrascreen:box-border">
              <section className="self-stretch flex flex-row items-center justify-end py-4 px-0 gap-[8px] md:hidden">
                <img
                  className="flex-1 relative rounded-2xl max-w-full overflow-hidden h-[13px]"
                  alt=""
                  src="/sparator11.svg"
                />
                <button className="cursor-pointer [border:none] py-0 px-6 bg-royalblue rounded-lg h-8 flex flex-row items-center justify-end box-border gap-[8px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/phplayfill.svg"
                  />
                  <div className="relative text-sm tracking-[0.02em] leading-[100%] font-semibold font-hind text-colors-white-100 text-left md:hidden">
                    Play Game
                  </div>
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
                  <div className="relative text-sm tracking-[0.02em] leading-[100%] font-semibold font-hind text-colors-white-100 text-left md:hidden">
                    0x923749237493
                  </div>
                </button>
              </section>
              <div className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start p-6 sm:p-5 sm:box-border Ultrascreen:w-[1600px] Ultrascreen:flex-1 Ultrascreen:self-center">
                <div className="self-stretch rounded-2xl flex flex-col items-start justify-start py-4 px-6 gap-[40px] border-[2px] border-dashed border-whitesmoke-400 sm:gap-[48px] sm:pt-4 sm:px-4 sm:pb-10 sm:box-border Ultrascreen:flex-1 Ultrascreen:items-start Ultrascreen:justify-start Ultrascreen:pl-10 Ultrascreen:pt-6 Ultrascreen:pr-10 Ultrascreen:box-border">
                  <div className="h-8 flex flex-row items-center justify-start gap-[8px]">
                    <h1
                      className="m-0 relative text-inherit leading-[120%] uppercase font-bold font-inherit md:text-base"
                      id="Dashboard"
                    >
                      Profile
                    </h1>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 sm:w-6 sm:h-6"
                      alt=""
                      src="/phinfobold.svg"
                    />
                  </div>
                  <section className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-sm text-dimgray font-baloo-2">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] sm:gap-[0px]">
                      <div className="relative font-semibold">Username</div>
                      <input
                        className="font-dm-sans text-sm bg-colors-white-100 self-stretch rounded-lg flex flex-col items-start justify-start py-2 px-3 border-[1px] border-solid border-silver sm:h-10 sm:gap-[8px] sm:pt-2 sm:pb-2 sm:box-border"
                        placeholder="Lorem ipsum sit damet "
                        type="text"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] sm:gap-[0px]">
                        <div className="relative font-semibold">Email</div>
                        <input
                          className="font-dm-sans text-sm bg-colors-white-100 self-stretch rounded-lg flex flex-col items-start justify-start py-2 px-3 border-[1px] border-solid border-silver sm:h-10 sm:gap-[8px] sm:pt-2 sm:pb-2 sm:box-border"
                          placeholder="Lorem ipsum sit damet "
                          type="text"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] sm:gap-[0px]">
                        <div className="relative font-semibold">Password</div>
                        <input
                          className="font-dm-sans text-sm bg-colors-white-100 self-stretch rounded-lg flex flex-col items-start justify-start py-2 px-3 border-[1px] border-solid border-silver sm:h-10 sm:gap-[8px] sm:pt-2 sm:pb-2 sm:box-border"
                          placeholder="Lorem ipsum sit damet "
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px] sm:gap-[0px]">
                      <div className="relative font-semibold">
                        Linked Wallet
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-colors-white-100 font-dm-sans">
                        <div className="rounded-lg bg-dimgray h-8 flex flex-row items-center justify-end py-0 px-16 box-border sm:h-8 sm:rounded-lg sm:pl-4 sm:pr-4 sm:box-border">
                          <b className="relative tracking-[0.02em] leading-[100%] sm:text-xs">
                            0x923749237493
                          </b>
                        </div>
                        <div className="rounded-lg bg-dimgray h-8 flex flex-row items-center justify-center py-0 px-6 box-border sm:h-8 sm:rounded-lg sm:pl-4 sm:pr-4 sm:box-border">
                          <b className="relative tracking-[0.02em] leading-[100%] sm:text-xs">
                            Link Wallet
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px] sm:gap-[4px]">
                      <div className="relative font-semibold">Social Media</div>
                      <img
                        className="relative rounded-2xl w-96 h-16 object-cover md:w-60 md:h-10 sm:w-60 sm:h-10"
                        alt=""
                        src="/image-29@2x.png"
                      />
                    </div>
                  </section>
                  <button
                    className="cursor-pointer [border:none] py-0 px-16 bg-dimgray rounded-lg h-8 flex flex-row items-center justify-end box-border sm:h-8 sm:rounded sm:pt-0 sm:box-border"
                    onClick={onPrimaryButtonClick}
                  >
                    <b className="relative text-sm tracking-[0.02em] leading-[100%] font-dm-sans text-colors-white-100 text-left sm:text-xs">
                      Change
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <section className="self-stretch hidden flex-row items-end justify-between py-1 px-6 z-[2] text-left text-xs text-darkgray font-baloo-bhaina-2 md:hidden sm:hidden">
              <div className="h-[15.1px] flex flex-row items-center justify-start gap-[16px] sm:gap-[4px]">
                <div className="relative leading-[133.2%] font-semibold sm:text-3xs">
                  Privacy Policy
                </div>
                <img
                  className="relative w-0 h-[14.5px]"
                  alt=""
                  src="/sparator2.svg"
                />
                <div className="relative leading-[133.2%] font-semibold sm:text-3xs">
                  Terms and Services
                </div>
              </div>
              <div className="relative leading-[133.2%] font-semibold sm:text-3xs sm:text-right sm:flex-1">
                Copyright © 2023 TerraQuest
              </div>
            </section>
            <div className="self-stretch bg-colors-white-100 h-12 hidden flex-row items-center justify-between py-2 px-6 box-border z-[3] text-5xs text-royalblue md:flex sm:flex sm:gap-[8px] sm:pt-2 sm:pb-4 sm:box-border">
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/bxsdashboard211.svg"
                  onClick={onBxsdashboardIcon11Click}
                />
                <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                  Dashboard
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/mditreasurechest4.svg"
                  onClick={onMditreasureChestIconClick}
                />
                <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                  Inventory
                </div>
              </div>
              <div className="hidden flex-col items-center justify-start">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/mditreasurechest5.svg"
                />
                <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                  Logout
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <img
                  className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                  alt=""
                  src="/iconamoonprofilefill9.svg"
                  onClick={onIconamoonprofileFillClick}
                />
                <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                  Profile
                </div>
              </div>
            </div>
            <div
              className="my-0 mx-[!important] absolute top-[0px] right-[0px] h-full flex flex-col items-end justify-end py-6 px-4 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] overflow-auto z-[4]"
              data-animate-on-scroll
            >
              <div
                className="flex flex-col items-center justify-start cursor-pointer"
                onClick={onFrameContainer1Click}
              >
                <div className="rounded-lg bg-colors-white-100 shadow-[0px_0px_15px_rgba(0,_0,_0,_0.15)] w-[460px] overflow-hidden flex flex-row items-center justify-start py-4 px-8 box-border gap-[8px]">
                  <b className="relative inline-block w-[372px] shrink-0">
                    Your Profile was Updated! 🎉
                  </b>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/octiconx12.svg"
                  />
                </div>
              </div>
              <div className="relative rounded-lg bg-mediumseagreen w-[239px] h-0.5" />
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

export default ProfileBindWalletSuccess1;
