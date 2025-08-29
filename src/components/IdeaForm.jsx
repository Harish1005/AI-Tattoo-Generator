
import { Send, Loader2 } from 'lucide-react'
import { useState } from 'react'

const IdeaForm = ({onGenerate, loading}) => {

  const [val, setVal] = useState("")

  const submit = (e) => {
    e.preventDefault();

    const idea = val.trim();

    if(!idea)  {
      return
    };

    onGenerate(idea)
  }

  return (
    <form onSubmit={submit} className='flex flex-col md:flex-row gap-4'>
      <input type="text" placeholder='Minimalist phoenix with geometric wings'
      value={val}
      onChange={(e) => setVal(e.target.value)}
      className='flex-1 border rounded-xl px-4 py-3 outline-none shadow-inner'/>

      <button type='submit'
      className='inline-flex items-center justify-center gap-3 rounded-xl shadow-lg cursor-pointer bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-3 '>
        {loading ? 
        <>
        <Loader2 size={15} className='animate-spin font-bold'/> 
        </>
        : 
        <>
        <Send size={15} /> Generate
        </> }
      </button>

    </form>
  )
}

export default IdeaForm
