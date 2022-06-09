import Icon24 from '../base/Icon24';

const d = "M18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 6ZM9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6ZM12 13.5C16.005 13.5 24 15.495 24 19.5V24H0V19.5C0 15.495 7.995 13.5 12 13.5ZM2.85 19.5C2.85 18.54 7.545 16.35 12 16.35C16.455 16.35 21.15 18.54 21.15 19.5V21.15H2.85V19.5Z";

const ProfileIcon = ( props ) => {
  const { width, height, fill } = props;
  
  return (
    <Icon24 
      width={width}
      height={height}
      fill={fill}
      d={d}
    />
  )
}

export default ProfileIcon;