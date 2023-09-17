import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2 } from "lucide-react"
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";


export function App() {

  return (
  <div className="min-h-screen flex flex-col">
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Desenvolvido com 💙 por Felipe Masil</span>
        <Separator orientation="vertical" className="h-6"/>
        <Button variant="outline" className="flex gap-2">
          Github
          <Github className="w-4 h-4"/>
        </Button>
      </div>
    </div>

    <main className="flex-1 p-6 flex gap-6">

      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-rows-2 gap-4 flex-1">
          <Textarea 
          placeholder="Inclua o prompt para IA..."
          className="resize-none p-4 leading-relaxed"
          />
          <Textarea 
          placeholder="Resultado gerado pela IA"
          className="resize-none p-4 leading-relaxed" 
          readOnly
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Lembre-se: você pode usar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo
          da transcrição do vídeo selecionado.
        </p>
      </div>


      <aside className="w-80 space-y-6 ">

        <form className="space-y-6">
          <label 
          htmlFor="video"
          className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5 transition-opacity"
          >
            Selecione um vídeo
            <FileVideo className="w-4 h-4"/>
          </label>
          <input type="file" id="video" accept="video/mp4" className="sr-only"/>

          <Separator />

          <div className="space-y-1">
            <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
            <Textarea 
            id="transcription_prompt" 
            className="min-h-20 leadind-relaxed text-muted-foreground"
            placeholder="Inclua palavras chave mencionadas no vídeo separadas por virgula."
            />
          </div>

          <Button type="submit" className="w-full flex gap-2">
            Carregar Vídeo 
            <Upload className="w-4 h-4"/>
          </Button>
        </form>

        <Separator />

        <form className="space-y-6">

        <div className="space-y-4">
            <Label>Prompt</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um Prompt" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Título do Youtube</SelectItem>
                <SelectItem value="description">Descrição do Youtube</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label>Modelo</Label>
            <Select disabled defaultValue="gpt3.5">
              <SelectTrigger>
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3.5">GPT 3.5 - Turbo</SelectItem>
              </SelectContent>
            </Select>

            <span className="block text-xs text-muted-foreground italic">Você poderá customizar essa opção em breve.</span>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label>Temperatura</Label>
            <Slider 
            min={0}
            max={1}
            step={0.1}
            />

            <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativos e com possíveis erros.</span>
          </div>

          <Separator />

          <Button type="submit" className="w-full flex gap-2">
            Executar
            <Wand2 className="w-4 h-4" />
          </Button>

        </form>

      </aside>

    </main>
  </div> 
  )
}
