import Card from "./card"

function Sketch() {
  return (
    <div className="">

<div class="grid grid-cols-4 gap-4 p-36">
  {/* <div class="aspect-square pt-6"><Card src={'/images/test3.png'} alt={'KAWAII'} width={1080} height={1080} /></div>
  <div class="aspect-video col-span-2"><Card src={'/images/test.png'} alt={'KAWAII'} width={1920} height={1080} /></div>
  <div class="aspect-square pt-6"><Card src={'/images/test3.png'} alt={'KAWAII'} width={1080} height={1080} /></div>
  <div class="row-span-2 pt-12"><Card src={'/images/test2.png'} alt={'KAWAII'} width={1080} height={1920} /></div>
  <div class="aspect-square"><Card src={'/images/test3.png'} alt={'KAWAII'} width={1080} height={1080} /></div>
  <div class="aspect-square"><Card src={'/images/test3.png'} alt={'KAWAII'} width={1080} height={1080} /></div>
  <div class="aspect-square"><Card src={'/images/test3.png'} alt={'KAWAII'} width={1080} height={1080} /></div> */}

  <div class="group aspect-video relative col-span-2">
    <div className="absolute"><Card src={'/images/211031.gif'} alt={''} width={1280} height={720} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center bg-slate-400 bg-opacity-80">
        <p className="text-white">Tool: TouchDesigner<br/>2021/10/31</p>
      </div>
    </div>
  </div>

  <div class="group aspect-video relative col-span-2">
    <div className="absolute"><Card src={'/images/210922.gif'} alt={''} width={1280} height={700} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center bg-slate-400 bg-opacity-50">
        <p className="text-white">Tool: Unity<br/>2021/09/22</p>
      </div>
    </div>
  </div>

  <div class="group aspect-video relative col-span-2">
    <div className="absolute"><Card src={'/images/210717.gif'} alt={''} width={1280} height={700} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center bg-slate-400 bg-opacity-30">
        <p className="text-white">Tool: Unity<br/>2021/07/17</p>
      </div>
    </div>
  </div>

  <div class="group aspect-square relative pt-5">
    <div className="absolute"><Card src={'/images/210609.png'} alt={''} width={1280} height={1280} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center bg-slate-400 bg-opacity-80">
        <p className="text-white">Tool: TouchDesigner<br/>2021/06/09</p>
      </div>
    </div>
  </div>

  <div class="group aspect-square relative pt-5">
    <div className="absolute"><Card src={'/images/MeltingSource.png'} alt={''} width={1280} height={1280} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center">
        <p className="text-white">Tool: p5.js<br/>2021/05/24</p>
      </div>
    </div>
  </div>

  <div class="group aspect-square relative pt-5">
    <div className="absolute"><Card src={'/images/210416.gif'} alt={''} width={1280} height={1280} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center bg-slate-400 bg-opacity-80">
        <p className="text-white">Tool: p5.js<br/>2021/04/16</p>
      </div>
    </div>
  </div>

  <div class="group aspect-video relative col-span-2">
    <div className="absolute"><Card src={'/images/202224.png'} alt={''} width={1920} height={1030} /></div>
    <div className="hidden group-hover:block">
      <div className="w-full h-full absolute flex justify-center items-center">
        <p className="text-white">Tool: p5.js<br/>2020/02/24</p>
      </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default Sketch