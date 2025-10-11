import { MyInfo } from "@/types/auth";

export default function MainUI({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
    return <div className="container">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-y-5 sm:gap-y-0 py-[100px] sm:py-[150px]">
            <div className="hidden sm:block"></div>
            <div>
                Work Experience <br />
                {myInfo.work_experience}
            </div>
            <div className="col-span-2">
                <h1 className="text-[30px] sm:text-[40px] font-semibold leading-[34px] sm:leading-[44px]">{myInfo.about_me}</h1>
            </div>
        </div>
    </div>
}