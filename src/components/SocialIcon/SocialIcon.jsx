import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialIcon = ({ socialType }) => {

    if (!socialType) {
        throw new Error('Please give a social type!');
    };

    return (
        <>
            <div className="bg-white p-3 rounded-full text-[#101727]">
                {
                    socialType === 'facebook'
                    ? <FaFacebookF size={16}></FaFacebookF>
                    : socialType === 'github'
                    ? <FaGithub size={16}></FaGithub>
                    : socialType === 'linkedin'
                    ? <FaLinkedinIn size={16}></FaLinkedinIn>
                    : ''
                }
            </div>
        </>
    );
};

export default SocialIcon;