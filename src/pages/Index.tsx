import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [playerProgress, setPlayerProgress] = useState(35);

  const levels = [
    {
      id: 1,
      name: "Замок Железного Короля",
      difficulty: "Легкий",
      boss: "Рыцарь-Страж",
      completed: true,
    },
    {
      id: 2,
      name: "Тёмный Лес",
      difficulty: "Средний",
      boss: "Лесной Дракон",
      completed: true,
    },
    {
      id: 3,
      name: "Огненная Пещера",
      difficulty: "Сложный",
      boss: "Древний Дракон",
      completed: false,
    },
    {
      id: 4,
      name: "Небесная Крепость",
      difficulty: "Экстремальный",
      boss: "Тёмный Повелитель",
      completed: false,
    },
  ];

  const heroes = [
    { name: "Сэр Артур", class: "Рыцарь", weapon: "Меч", level: 12 },
    { name: "Элара", class: "Лучник", weapon: "Лук", level: 8 },
    { name: "Торин", class: "Маг", weapon: "Посох", level: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 p-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-3 bg-black/30 rounded-lg mb-4 font-mono text-sm border-2 border-orange-400 pixel-flicker">
            <span className="text-orange-400">◆</span> PIXEL PLATFORMER{" "}
            <span className="text-orange-400">◆</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 font-mono tracking-wider text-shadow-lg">
            ДРАКОНЫ И РЫЦАРИ
          </h1>
          <p className="text-xl font-mono text-orange-200 mb-6">
            Эпическое средневековое приключение в пиксельном мире
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-mono border-2 border-orange-400 px-8 py-3 pulse-glow transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedLevel(1)}
            >
              <Icon name="Sword" className="mr-2" />
              НАЧАТЬ ИГРУ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Settings" className="mr-2" />
              НАСТРОЙКИ
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Player Progress */}
        <Card className="mb-8 bg-slate-800 border-slate-600">
          <CardHeader>
            <CardTitle className="text-2xl font-mono text-orange-400 flex items-center">
              <Icon name="User" className="mr-2" />
              ПРОГРЕСС ИГРОКА
            </CardTitle>
            <CardDescription className="text-slate-300">
              Твоё путешествие через средневековый мир
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-cyan-400">Общий прогресс:</span>
              <span className="font-mono text-orange-400">
                {playerProgress}%
              </span>
            </div>
            <Progress value={playerProgress} className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                <div className="font-mono text-sm text-slate-300 mb-1">
                  Уровни пройдены
                </div>
                <div className="font-mono text-2xl text-orange-400">2/4</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                <div className="font-mono text-sm text-slate-300 mb-1">
                  Боссы побеждены
                </div>
                <div className="font-mono text-2xl text-red-400">2/4</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                <div className="font-mono text-sm text-slate-300 mb-1">
                  Время игры
                </div>
                <div className="font-mono text-2xl text-cyan-400">12ч 45м</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Level Selection */}
        <Card className="mb-8 bg-slate-800 border-slate-600">
          <CardHeader>
            <CardTitle className="text-2xl font-mono text-orange-400 flex items-center">
              <Icon name="Map" className="mr-2" />
              ВЫБОР УРОВНЯ
            </CardTitle>
            <CardDescription className="text-slate-300">
              Выбери свой путь к победе
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {levels.map((level) => (
                <Card
                  key={level.id}
                  className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedLevel === level.id
                      ? "bg-orange-500/20 border-orange-400"
                      : "bg-slate-700 border-slate-600 hover:bg-slate-600"
                  }`}
                  onClick={() => setSelectedLevel(level.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-mono text-cyan-400">
                        {level.name}
                      </CardTitle>
                      {level.completed && (
                        <Badge className="bg-green-600 text-white font-mono">
                          <Icon name="Check" className="mr-1 h-3 w-3" />
                          ПРОЙДЕН
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src={
                          level.id === 1
                            ? "/img/a6e643d8-8ba9-4912-8ffc-cc2641ba5aee.jpg"
                            : "/img/b3de294c-d8e0-4ff6-bd65-39c911e3df90.jpg"
                        }
                        alt={level.name}
                        className="w-full h-32 object-cover rounded-lg border-2 border-slate-600 pixel-art"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-slate-300">
                          Сложность:
                        </span>
                        <span
                          className={`font-mono text-sm ${
                            level.difficulty === "Легкий"
                              ? "text-green-400"
                              : level.difficulty === "Средний"
                                ? "text-yellow-400"
                                : level.difficulty === "Сложный"
                                  ? "text-orange-400"
                                  : "text-red-400"
                          }`}
                        >
                          {level.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-slate-300">
                          Босс:
                        </span>
                        <span className="font-mono text-sm text-red-400">
                          {level.boss}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className={`w-full mt-3 font-mono ${
                          level.completed
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-orange-500 hover:bg-orange-600"
                        }`}
                        disabled={
                          !level.completed &&
                          level.id > 1 &&
                          !levels[level.id - 2].completed
                        }
                      >
                        <Icon name="Play" className="mr-2 h-4 w-4" />
                        {level.completed ? "ПЕРЕИГРАТЬ" : "ИГРАТЬ"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Heroes */}
        <Card className="mb-8 bg-slate-800 border-slate-600">
          <CardHeader>
            <CardTitle className="text-2xl font-mono text-orange-400 flex items-center">
              <Icon name="Users" className="mr-2" />
              ГЕРОИ
            </CardTitle>
            <CardDescription className="text-slate-300">
              Выбери своего чемпиона
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {heroes.map((hero, index) => (
                <Card
                  key={index}
                  className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-mono text-cyan-400">
                      {hero.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <img
                        src="/img/ae186b1f-1243-41f0-bcca-ef19dc44ad92.jpg"
                        alt={hero.name}
                        className="w-full h-32 object-cover rounded-lg border-2 border-slate-600 pixel-art"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-slate-300">
                          Класс:
                        </span>
                        <span className="font-mono text-sm text-orange-400">
                          {hero.class}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-slate-300">
                          Оружие:
                        </span>
                        <span className="font-mono text-sm text-cyan-400">
                          {hero.weapon}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-slate-300">
                          Уровень:
                        </span>
                        <span className="font-mono text-sm text-green-400">
                          {hero.level}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 font-mono"
                      >
                        <Icon name="Shield" className="mr-2 h-4 w-4" />
                        ВЫБРАТЬ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Game Stats */}
        <Card className="bg-slate-800 border-slate-600">
          <CardHeader>
            <CardTitle className="text-2xl font-mono text-orange-400 flex items-center">
              <Icon name="Trophy" className="mr-2" />
              ДОСТИЖЕНИЯ
            </CardTitle>
            <CardDescription className="text-slate-300">
              Твои подвиги в пиксельном мире
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <Icon
                  name="Sword"
                  className="mx-auto mb-2 h-8 w-8 text-orange-400"
                />
                <div className="font-mono text-lg text-cyan-400">127</div>
                <div className="font-mono text-sm text-slate-300">Враги</div>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <Icon
                  name="Crown"
                  className="mx-auto mb-2 h-8 w-8 text-yellow-400"
                />
                <div className="font-mono text-lg text-cyan-400">2</div>
                <div className="font-mono text-sm text-slate-300">Боссы</div>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <Icon
                  name="Coins"
                  className="mx-auto mb-2 h-8 w-8 text-orange-400"
                />
                <div className="font-mono text-lg text-cyan-400">2,450</div>
                <div className="font-mono text-sm text-slate-300">Золото</div>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <Icon
                  name="Heart"
                  className="mx-auto mb-2 h-8 w-8 text-red-400"
                />
                <div className="font-mono text-lg text-cyan-400">15</div>
                <div className="font-mono text-sm text-slate-300">Смерти</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
