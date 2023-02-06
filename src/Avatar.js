import PropTypes from "prop-types";

export default function Avatar({src="https://i.imgur.com/OKS67lhm.jpg", alt, size= 100}){
    return(
      <img
          className="avatar"
          src={src}
          alt={alt}
          width={size}
          height={size}
        />
    );
}

Avatar.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    isRounded: PropTypes.bool
}