import React from "react";
import DeleteFriend from "../../modal/DeleteFriend";
import FriendProfile from "../../modal/FriendProfile";

const Friend = ({
    friend,
    functionWhenClick,
    gotoChat,
    clickToOption,
    isShowFriendsOption,
    viewProfile,
    profile,
    mouseLeave,
}) => {
    const deleteFriend = () => {
        console.log(`done`);
    };

    const FRIEND_ID = friend.friend.id;
    return (
        <div className="friend row p-3 center" onClick={functionWhenClick}>
            <div className="col-3 center">
                <div className="friend__img">
                    <img src={friend.friend.imageUrl} alt="" />
                </div>
            </div>

            <div className="col-8 d-flex align-items-center">
                <div className=" text-medium">{friend.friend.displayName}</div>
            </div>

            <div
                className="col-1 option-friend-inbox "
                id={`fo${FRIEND_ID}`}
                onClick={clickToOption}
            >
                <div
                    className={`center flex-column option-friend-inbox__options ${isShowFriendsOption}`}
                >
                    <div
                        className={`option-friend-inbox__options__element  text-small`}
                        onClick={gotoChat}
                    >
                        Nhắn tin
                    </div>
                    <FriendProfile
                        profile={profile}
                        onMouseLeave={mouseLeave}
                        viewProfile={viewProfile}
                        id={FRIEND_ID}
                    />

                    <DeleteFriend
                        id={FRIEND_ID}
                        deleteFriend={() => deleteFriend()}
                        onMouseLeave={mouseLeave}
                    />
                </div>
                ...
            </div>
        </div>
    );
};

export default Friend;
