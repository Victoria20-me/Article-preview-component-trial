import React from "react";
import { useState } from "react";
import facebook from "../assets/images/icon-facebook.svg";

const ArticlePreview = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center min-h-screen   justify-center p-6 bg-slate-200 ">
      <div className="max-w-3xl bg-white md:grid md:grid-cols-2  shadow-lg overflow-hidden">
        <img
          src="src\assets\images\drawers.jpg"
          alt="drawer"
          className="w-full h-full object-cover"
        />

        <div className="p-6 relative">
          <h1 className="text-xl font-bold text-slate-700">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>

          <p className="text-sm text-slate-500 mt-4">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img
                src="src\assets\images\avatar-michelle.jpg"
                alt="avatar image of michelle"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">
                Michelle Appleton
              </p>
              <p className="text-sm text-slate-400">28 Jun 2020</p>
            </div>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200"
              >
                <img src="src\assets\images\icon-share.svg" alt="share-icon" />
              </button>
            </div>
          </div>
          {open && (
            <div className="absolute right-8 bottom-20 py-3 px-6 bg-slate-700">
              <span className="tracking-[0.3em] text-slate-300">SHARE</span>
              <img src={facebook} alt="facebook" />
              <img src="src\assets\images\icon-pinterest.svg" alt="pinterest" />
              <img src="src\assets\images\icon-twitter.svg" alt="twitter" />
              <div className="absolute -bottom-2 right-10 w-4 h-4 rotate-45 bg-slate-700"></div>
            </div>
          )}
          {/* author */}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
