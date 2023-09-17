import { CheckCircleOutlined, CloseCircleOutlined, CopyOutlined, ReloadOutlined } from "@ant-design/icons"

export const PasswordGeneratorPage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-sm flex flex-col pt-4 pb-6 px-4 rounded-md shadow-xl h-full">
      {/* Tittle */}
      <h1 className="font-regular text-xl leading-none mb-4 flex w-full">Password Generator</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="w-full">
          {/* Input Field */}
          <input type="text" className="rounded-md border-gray-400 w-full" placeholder="Please put your password" />

          {/* Password Filters */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked className="rounded-md border-gray-400" />
              <p>Include special characters</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" checked className="rounded-md border-gray-400" />
              <p>Include numbers</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" checked className="rounded-md border-gray-400" />
              <p>Include uppercase letters</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" checked className="rounded-md border-gray-400" />
              <p>Exclude consecutive repeating characters</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-lg leading-none">
              <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              <p>Has one or more of these special characters: !@#$%^&*</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              <p>Has a number / digit</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              <p>Has a uppercase letter</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              <p>Has no consecutive repeating characters</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-full flex items-center justify-center gap-3">
          Generate Password
          <ReloadOutlined />
        </button>
        <button className="bg-gray-500 text-white rounded-md px-4 py-2 w-full ml-4 flex items-center justify-center gap-3">
          Copy Password
          <CopyOutlined />
        </button>
      </div>
    </div>
  )
}
