import { useEffect } from "react";
import  useChatStore  from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import  {useAuthStore}  from "../store/useAuthStore";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
  {allContacts.map((contact) => (
  <div
    key={contact._id}
    className="bg-cyan-500/10 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
    onClick={() => setSelectedUser(contact)}
  >
    <div className="flex items-center gap-3 min-w-0">
      <div className={`avatar ${onlineUsers.includes(contact._id) ? "online" : "offline"}`}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0">
          <img src={contact.profilePic || "/avatar.png"} alt={contact.fullName} />
        </div>
      </div>
      <h4 className="text-slate-200 font-medium truncate">{contact.fullName}</h4>
    </div>
  </div>
))}
    </>
  );
}
export default ContactList;
