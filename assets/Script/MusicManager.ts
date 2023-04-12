const {ccclass, property} = cc._decorator;

@ccclass
export default class MusicManager extends cc.Component {

    private static  _instance:MusicManager = null


    public static get instance():MusicManager{
        if (!MusicManager._instance){
            MusicManager._instance = new MusicManager();
        }
        return this._instance
    }

    private _musicAs: cc.AudioSource;
    private _soundAs: cc.AudioSource;

    private static readonly MinMusicVolume:number = 0;
    private static readonly MaxMusicVolume:number = 0.5;
    private static readonly MinSoundVolume:number = 0;
    private static readonly MaxSoundVolume: number = 1;
    private static readonly MusicFadeDuration: number = 1;
    private static readonly MusicFadeInterval: number = 0.05;

    public get isSoundMute():boolean
    {
       return this._soundAs.volume == MusicManager.MinSoundVolume;
    }
    public get isMusicMute():boolean
    {
       return this._musicAs.volume == MusicManager.MinMusicVolume;
    }

    onDestroy()
    {
        this.myDestroy();
    }

    private init(): void
    { 
        this._musicAs = this.createAs(MusicManager.MaxMusicVolume, true);
        this._soundAs = this.createAs(MusicManager.MaxSoundVolume, false);
    }

    private createAs(volume:number, isLoop:boolean): cc.AudioSource
    { 
        let curAs: cc.AudioSource = this.node.addComponent(cc.AudioSource);
        curAs.clip = null;
        curAs.loop = isLoop;
        // curAs.playOnAwake = false;
        curAs.volume = volume;
        return curAs;
    }

    public myDestroy():void
    { 
        let nowNode:cc.Node = MusicManager.instance.node;
        nowNode.destroy();
        MusicManager._instance = null;
    }

    // 音乐：静音
    public muteMusic(): void
    { 
        this._musicAs.volume = MusicManager.MinMusicVolume;
    }
    // 音效：静音
    public muteSound(): void
    { 
        this._soundAs.volume = MusicManager.MinSoundVolume;
    }
    // 音乐：取消静音ß
    public cancelMuteMusic(): void
    { 
        this._musicAs.volume = MusicManager.MaxMusicVolume;
    }
    // 音效：取消静音
    public cancelMuteSound(): void
    { 
        this._soundAs.volume = MusicManager.MaxSoundVolume;
    }
    // 播放指定音乐（传入clip， 默认循环，淡入淡出）
    public playMusic(clip: cc.AudioClip): void
    {
        this.unschedule(this.musicFadeIn);
        this.unschedule(this.musicFadeOut);

        if (this.isMusicMute)
        {
            this._musicAs.stop();
            this._musicAs.clip = clip;
            this._musicAs.play();
            return;
        }

        if (this._musicAs.clip)
        { 
            // 淡出淡入
            this._musicAs.volume = MusicManager.MaxMusicVolume;
            this.schedule(this.musicFadeOut, MusicManager.MusicFadeInterval, MusicManager.MusicFadeDuration / MusicManager.MusicFadeInterval, 0);
            setTimeout(() =>
            {
                this._musicAs.stop();
                this._musicAs.volume = MusicManager.MinMusicVolume;
                this._musicAs.clip = clip;
                this._musicAs.play();
                this.schedule(this.musicFadeIn, MusicManager.MusicFadeInterval, MusicManager.MusicFadeDuration / MusicManager.MusicFadeInterval, 0);

            }, MusicManager.MusicFadeDuration*1000);
        }
        else
        { 
            // 直接淡入
            this._musicAs.volume = MusicManager.MinMusicVolume;
            this._musicAs.clip = clip;
            this._musicAs.play();
            this.schedule(this.musicFadeIn, MusicManager.MusicFadeInterval, MusicManager.MusicFadeDuration / MusicManager.MusicFadeInterval, 0);
        }
     
    }

    private musicFadeOut():void
    { 
        let volume = this._musicAs.volume - (MusicManager.MaxMusicVolume - MusicManager.MinMusicVolume) / (MusicManager.MusicFadeDuration / MusicManager.MusicFadeInterval);
        volume = volume < 0 ? 0 : volume;
        this._musicAs.volume = volume;0
    }
    private musicFadeIn():void
    { 
        let volume = this._musicAs.volume + (MusicManager.MaxMusicVolume - MusicManager.MinMusicVolume) / (MusicManager.MusicFadeDuration / MusicManager.MusicFadeInterval);
        volume = volume > MusicManager.MaxMusicVolume ? MusicManager.MaxMusicVolume : volume;
        this._musicAs.volume = volume;
    }

    // 播放音效（传入clip）
    public playSound(clip: cc.AudioClip): void
    { 
        this._soundAs.clip = clip; 
        this._soundAs.play()
    }
}
