import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileFormData, profileFormSchema } from "./profileFormSchema"
import GetUserDTO from "../../types/GetUserDTO"

function ProfileForm({ user }: { user: GetUserDTO }) {
  const { register, handleSubmit, formState: { errors,isDirty, isValid  } } = useForm<ProfileFormData>({
    resolver: yupResolver(profileFormSchema),
    defaultValues: {
      name: user.name,
      pictureUrl: user?.pictureUrl,
      status: user?.status,
      funFact: user?.funFact,
      bio: user?.bio
    }
  })

  const onSubmit = (data: ProfileFormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full bg-base-200 rounded-xl p-6">

      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input {...register("name")} className="input input-bordered w-full mb-3" />

      <label className="label">
        <span className="label-text">Picture URL <small className="text-error text-xs">{errors?.pictureUrl?.message}</small></span>
      </label>
      <input {...register("pictureUrl")} className="input input-bordered w-full mb-3" />

      <label className="label">
        <span className="label-text">Status</span>
      </label>
      <input {...register("status")} className="input input-bordered w-full mb-3" />

      <label className="label">
        <span className="label-text">Fun fact</span>
      </label>
      <input {...register("funFact")} className="input input-bordered w-full mb-3" />

      <label className="label">
        <span className="label-text">Bio</span>
      </label>
      <textarea {...register("bio")} className="textarea textarea-bordered h-32 mb-3"></textarea>

      <button disabled={!isDirty || !isValid} className="btn btn-primary mt-5">Apply changes</button>

    </form>
  )
}

export default ProfileForm