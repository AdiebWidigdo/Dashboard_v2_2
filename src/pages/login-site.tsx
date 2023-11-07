import { FunctionComponent, useState, useCallback } from "react";
import LoginRegisterFirst from "../components/login-register-first";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";

const LoginSite: FunctionComponent = () => {
  const [isLoginRegisterFirstPopupOpen, setLoginRegisterFirstPopupOpen] =
    useState(false);
  const [isLoginRegisterFirstPopup1Open, setLoginRegisterFirstPopup1Open] =
    useState(false);
  const [isLoginRegisterFirstPopup2Open, setLoginRegisterFirstPopup2Open] =
    useState(false);
  const navigate = useNavigate();

  const openLoginRegisterFirstPopup = useCallback(() => {
    setLoginRegisterFirstPopupOpen(true);
  }, []);

  const closeLoginRegisterFirstPopup = useCallback(() => {
    setLoginRegisterFirstPopupOpen(false);
  }, []);

  const onDashboardClick = useCallback(() => {
    navigate("/dashboardmobile");
  }, [navigate]);

  const openLoginRegisterFirstPopup1 = useCallback(() => {
    setLoginRegisterFirstPopup1Open(true);
  }, []);

  const closeLoginRegisterFirstPopup1 = useCallback(() => {
    setLoginRegisterFirstPopup1Open(false);
  }, []);

  const openLoginRegisterFirstPopup2 = useCallback(() => {
    setLoginRegisterFirstPopup2Open(true);
  }, []);

  const closeLoginRegisterFirstPopup2 = useCallback(() => {
    setLoginRegisterFirstPopup2Open(false);
  }, []);

  const onImage29Click = useCallback(() => {
    navigate("/");
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

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-screen overflow-hidden flex flex-col items-start justify-start text-left text-5xs text-royalblue font-dm-sans sm:w-auto sm:[align-self:unset] sm:h-screen">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px] lg:flex-1 md:flex-1 sm:flex-1 sm:gap-[8px]">
          <nav
            className="m-0 self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-colors-white-100 w-60 flex flex-col items-start justify-between p-4 box-border cursor-pointer md:hidden"
            onClick={openLoginRegisterFirstPopup}
          >
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
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard1.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Profile
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
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
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard4.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Memory Fragment
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]">
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
              <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
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
          <div className="self-stretch flex-1 flex flex-col items-center justify-between md:gap-[16px] sm:gap-[8px] sm:items-center sm:justify-between">
            <div className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-between py-2 px-4 md:flex sm:flex sm:self-stretch sm:w-auto">
              <img
                className="relative w-[92.8px] h-14 object-cover"
                alt=""
                src="/terraquestlogobig-2@2x.png"
              />
              <img
                className="relative w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/iconamoonmenuburgerhorizontalbold.svg"
                onClick={openLoginRegisterFirstPopup1}
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-4 gap-[24px] lg:h-auto md:h-auto md:gap-[16px] md:items-center md:justify-center sm:w-auto sm:[align-self:unset] sm:h-auto sm:gap-[8px] sm:pl-2 sm:pr-2 sm:box-border">
              <section className="self-stretch flex flex-row items-center justify-end py-4 px-0 gap-[8px] md:hidden">
                <img
                  className="flex-1 relative rounded-2xl max-w-full overflow-hidden h-[13px]"
                  alt=""
                  src="/sparator4.svg"
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
                  onClick={openLoginRegisterFirstPopup2}
                >
                  <img
                    className="relative rounded-sm w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard10.svg"
                  />
                  <div className="relative text-sm tracking-[0.02em] leading-[100%] font-semibold font-hind text-colors-white-100 text-left md:hidden">
                    Connect Your Wallet
                  </div>
                </button>
              </section>
              <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-6 md:items-center md:justify-center md:p-4 md:box-border sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-center sm:p-4 sm:box-border Ultrascreen:items-center Ultrascreen:justify-center">
                <img
                  className="relative rounded-2xl w-[324px] h-[462px] object-cover cursor-pointer Ultrascreen:w-[560px] Ultrascreen:h-[800px]"
                  alt=""
                  src="/image-291@2x.png"
                  onClick={onImage29Click}
                />
              </div>
            </div>
            <section className="self-stretch flex flex-row items-end justify-between py-1 px-6 text-left text-xs text-darkgray font-baloo-bhaina-2 md:flex sm:hidden">
              <div className="h-[15.1px] flex flex-row items-center justify-start gap-[16px] sm:gap-[4px]">
                <div className="relative leading-[133.2%] font-semibold sm:text-3xs">
                  Privacy Policy
                </div>
                <img
                  className="relative w-0.5 h-[16.5px]"
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
            <div className="self-stretch bg-colors-white-100 h-12 hidden flex-row items-center justify-between py-2 px-6 box-border md:hidden sm:flex sm:gap-[8px] sm:pt-2 sm:pb-4 sm:box-border">
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
          </div>
        </div>
      </div>
      {isLoginRegisterFirstPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginRegisterFirstPopup}
        >
          <LoginRegisterFirst onClose={closeLoginRegisterFirstPopup} />
        </PortalPopup>
      )}
      {isLoginRegisterFirstPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginRegisterFirstPopup1}
        >
          <LoginRegisterFirst onClose={closeLoginRegisterFirstPopup1} />
        </PortalPopup>
      )}
      {isLoginRegisterFirstPopup2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginRegisterFirstPopup2}
        >
          <LoginRegisterFirst onClose={closeLoginRegisterFirstPopup2} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginSite;
