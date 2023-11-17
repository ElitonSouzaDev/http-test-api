
const responseExampleOK = {
  "statusCode": 200,
  "message": "Good Job!"
}

const responseExampleBad = {
  "statusCode": 400,
  "message": "error sending request"
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-3xl pb-6">
          Test your <b className="text-green-500">http status</b> by using our <span className="text-green-500">API</span>
        </h1>
        <div className=" 
            left-0 
            top-0 
            flex 
            flex-col 
            p-8
            justify-center 
            border 
            bg-gradient-to-b  
            pb-6 
            pt-8 
            backdrop-blur-2xl 
            border-neutral-800 
            bg-zinc-800/30 
            from-inherit 
            static w-auto  
            rounded-xl">
          <h2 className='text-2xl font-bold pb-2'> API Reference</h2>
          <p>Use this endpoint to check a single <span className="text-green-500">URL http Status.</span></p>
          <p>You send a <span className="text-green-500">URL to fetch</span> and we give you the <span className="text-green-500">HTTP status code.</span></p>

          <p className="font-semibold pt-4 pb-4">
            <span className="bg-green-500 p-2 mr-2">POST</span> https://http-test-api.vercel.app/api/</p>
          <h3 className="text-2xl">Parameters</h3>
          <h4 className="text-xl py-4">Body</h4>
          <div className="flex relative overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left rtl:text-right flex flex-col ">
              <thead className="text-xs text-gray-200 uppercase bg-gray-900 ">
                <tr className="flex ">
                  <th className='px-6 py-3 flex-1'>Parameter</th>
                  <th className='px-6 py-3 flex-1'>Type</th>
                  <th className='px-6 py-3 flex-1'>Description</th>
                  <th className='px-6 py-3 flex-1'>Required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-800 border-gray-700 flex ">
                  <td className='px-6 py-4 font-medium  text-white flex-1'>requestURL</td>
                  <td className='px-6 py-4 font-medium  text-white flex-1'>string</td>
                  <td className='px-6 py-4 font-medium  text-white flex-1'>The URL to fetch the status for. Set a URL that includes an http or https scheme. Example: https://wikipedia.com</td>
                  <td className='px-6 py-4 font-medium  text-white flex-1'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="pt-4 text-xl pb-4">Our Response</h3>
          <div className="flex gap-4 flex-wrap">
            <textarea defaultValue={JSON.stringify(responseExampleOK, undefined, 2)} className="bg-gray-800 p-4 rounded-md w-full font-medium min-h-[130px] max-h-[130px] border-green-500 border-2" readOnly disabled/>
            <textarea defaultValue={JSON.stringify(responseExampleBad, undefined, 2)} className="bg-gray-800 p-4 rounded-md w-full font-medium min-h-[130px] max-h-[130px] border-red-500 border-2" readOnly disabled />
          </div>
        </div>
      </main>
    </>
  )
}
