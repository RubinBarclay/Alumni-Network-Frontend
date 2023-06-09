import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ProfileForm from "../components/ProfileForm/ProfileForm"
import { useState } from "react"

type Props = {}

function Profile({ }: Props) {
  const [editMode, setEditMode] = useState(false)
  const user = useSelector((state: RootState) => state.user)

  const initials = user.name ? user.name.split(" ").map((name: string) => name[0].toUpperCase()).join("") : "ツ"

  return (
    <main className="page flex flex-col lg:flex-row">
      
      <section className="mb-6 lg:mr-4 lg:mb-0 lg:basis-1/3">

        <div className="relative flex flex-col items-center max-w-md lg:max-w-sm bg-base-200 rounded-xl p-6 mx-auto">

          {/* Avatar */}
          {user?.pictureUrl ? (
            <div className="avatar placeholder mb-4">
              <div className="w-36 rounded-full">
                <img src={user.pictureUrl} alt="Profile picture" />
              </div>
            </div>
          ) : (
            <div className="avatar placeholder mb-4">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                <span className="text-3xl">{initials}</span>
              </div>
            </div>
          )}

          {/* Name, status, fun fact, bio */}
          <article className="prose max-w-md">
            <p className="text-xl mb-6 text-center">{user.name}</p>
            {user?.status && <p className="m-0 mb-3">Status: {user.status}</p>}
            {user?.funFact && <p className="m-0 mb-3">Fun fact: {user.funFact}</p>}
            {user?.bio && <p className="m-0">Bio: {user.bio}</p>}
          </article>


          {/* Edit profile button */}
          {!editMode && (
            <button onClick={() => setEditMode(true)} className="absolute top-2 right-2 btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          )}

          {/* Cancel edit button */}
          {editMode && (
            <button onClick={() => setEditMode(false)} className="absolute top-2 right-2 btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

        </div>
      </section>

      <section className="lg:basis-2/3 lg:pl-4">

        {/* Show users posts OR edit user form if edit button is clicked */}
        {editMode ? (
          <ProfileForm user={user} cancelEdit={() => setEditMode(false)} />
        ) : (
          <div className="bg-orange-200 lg:basis-2/3">
            Your posts
          </div>
        )}

      </section >
    </main >
  )
}

export default Profile