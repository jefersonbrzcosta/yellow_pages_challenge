import * as React from "react";
import Image from "next/image";
import { AvatarInterface } from "../interfaces";

type Props = AvatarInterface;

const Avatar = ({ avatarSize, image }: Props) => {
  const [avatarPicture, setAvatarPicture] = React.useState<string>(image);

  return (
    <div className="flex items-center mr-5">
      <Image
        className="inline object-cover rounded-full"
        src={avatarPicture}
        width={avatarSize}
        height={avatarSize}
        alt="Profile image"
        onError={() => setAvatarPicture("/default.png")}
      />
    </div>
  );
};

export default Avatar;
