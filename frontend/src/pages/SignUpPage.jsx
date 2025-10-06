import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  <div className="w-full flex items-center justify-center py-8 bg-slate-900">
  <div className="relative w-full max-w-6xl min-h-screen md:h-[800px]">
    <BorderAnimatedContainer>
      <div className="w-full flex flex-col md:flex-row">
        {/* FORM COLUMN */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center md:border-r border-slate-600/30">
          <div className="w-full max-w-md">
            {/* Heading & Form unchanged */}
          </div>
        </div>

        {/* Illustration COLUMN */}
        <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
          <div className="w-full">
            <img
              src="/signup.png"
              alt="People using mobile devices"
              className="w-full h-auto object-contain"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-medium text-cyan-400">Start Your Journey Today</h3>

              <div className="mt-4 flex justify-center gap-4 flex-wrap">
                <span className="auth-badge">Free</span>
                <span className="auth-badge">Easy Setup</span>
                <span className="auth-badge">Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BorderAnimatedContainer>
  </div>
</div>

}
export default SignUpPage;
