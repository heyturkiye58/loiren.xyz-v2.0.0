export default function Hero() {
    return (
        <div className="pb-5 overflow-hidden flex items-end -skew-y-3 -translate-y-1/3 -z-[1] absolute top-0 left-0 right-0 h-[275px] md:h-[375px]" style={{ backgroundImage: 'url(https://cdn.feign-wiki.tk/img/20230409_132602.gif)', backgroundSize: 'cover' }}>
            <div className="hidden md:block w-4/6 ml-auto">
                <h1 className="md:ml-10 text-4xl text-white font-bold tracking-tight">Hi there, I'm Adenin Konas</h1>
                <p className="md:ml-10 font-medium text-white/50 tracking-tight">Beginner Discord Bot Developer.</p>
            </div>
        </div>
    );
};
