"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Gamepad2,
  Sparkles,
  Palette,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThirdCafeHomepage() {
 const menuItems = [
  {
    name: "カルボナーラ",
    price: "¥1,200",
    desc: "濃厚チーズとベーコンの王道クリームパスタ。",
  },
  {
    name: "明太クリームパスタ",
    price: "¥1,200",
    desc: "明太子の旨味たっぷりの人気メニュー。",
  },
  {
    name: "ペペロンチーノ",
    price: "¥1,200",
    desc: "ガーリック香るシンプルな定番パスタ。",
  },
  {
    name: "ナポリタン",
    price: "¥1,200",
    desc: "昔ながらの喫茶店風ナポリタン。",
  },
  {
    name: "和風きのこパスタ",
    price: "¥1,200",
    desc: "醤油ベースで仕上げた和風パスタ。",
  },
  {
    name: "ボロネーゼ",
    price: "¥1,200",
    desc: "じっくり煮込んだミートソース。",
  },
  {
    name: "ジェノベーゼ",
    price: "¥1,200",
    desc: "バジル香る爽やかな人気パスタ。",
  },
  {
    name: "たらこパスタ",
    price: "¥1,200",
    desc: "たらこの旨味を活かした定番メニュー。",
  },
  {
    name: "エビのトマトクリーム",
    price: "¥1,200",
    desc: "海老の旨味たっぷり濃厚クリーム。",
  },
  {
    name: "ツナマヨ和風パスタ",
    price: "¥1,200",
    desc: "ツナとマヨネーズの間違いない組み合わせ。",
  },

  {
    name: "お絵描きオムライス",
    price: "¥1,400",
    desc: "ケチャップでお絵描きできる定番メイドメニュー。",
  },
  {
    name: "ふりふりポテト",
    price: "¥800",
    desc: "選べるフレーバーで楽しめる人気メニュー。",
  },
  {
    name: "からあげバスケット",
    price: "¥1,000",
    desc: "ジューシーな唐揚げ盛り合わせ。",
  },
  {
    name: "チェキ撮影",
    price: "¥1,000",
    desc: "思い出に残る記念チェキ。",
  },
  {
    name: "デコチェキ",
    price: "¥1,500",
    desc: "落書き＆デコレーション付きチェキ。",
  },
  {
    name: "推しドリンク",
    price: "¥1,200",
    desc: "好きなカラーで作るオリジナルドリンク。",
  },
  {
    name: "プレミアムパフェ",
    price: "¥1,300",
    desc: "映える盛り盛りスイーツ。",
  },
  {
    name: "飲み放題 1時間",
    price: "¥1,000",
    desc: "ソフトドリンク、アルコール飲み放題。",
  },
];
  const features = [
    {
      icon: <Coffee className="h-7 w-7" />,
      title: "ゆっくり過ごせるカフェ空間",
      desc: "ランチ、休憩、作業、ちょっとした待ち合わせにも使いやすい、落ち着いたカフェです。",
    },
    {
      icon: <Gamepad2 className="h-7 w-7" />,
      title: "eスポーツエリア",
      desc: "ゲームや配信文化に触れられる、3rd Cafeならではの体験スペースを用意しています。",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "アバター接客",
      desc: "Live2Dなどのデジタル技術を活用した、新しい形の接客体験をお楽しみいただけます。",
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "アート展示・販売",
      desc: "施設で制作された作品を展示し、レンタルアートや販売につながる場としても展開しています。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff8f0] text-zinc-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-200 text-xl font-black text-orange-700 shadow-sm">
              3rd
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">
                Peer Suppotr Cafe 3rd
              </p>

              <p className="text-xs text-zinc-500">
                Cafe / eSports / Avatar / Art
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-600 md:flex">
            <a href="#about" className="hover:text-orange-600">
              About
            </a>

            <a href="#menu" className="hover:text-orange-600">
              Menu
            </a>

            <a href="#space" className="hover:text-orange-600">
              Space
            </a>

            <a href="#access" className="hover:text-orange-600">
              Access
            </a>
          </nav>

          <Button className="rounded-full bg-orange-500 px-5 hover:bg-orange-600">
            お問い合わせ
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-pink-200 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow-sm">
              名古屋の新しい体験型カフェ
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              カフェに、
              <br />
              ちょっと未来を。
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              3rd Cafeは、ドリンクや食事を楽しみながら、
              eスポーツ、アバター接客、デジタルアートに触れられる
              新しいカフェ空間です。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-orange-500 px-7 py-6 text-base hover:bg-orange-600">
                メニューを見る
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-orange-200 bg-white px-7 py-6 text-base"
              >
                アクセスを見る
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-orange-100">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-8 text-center">
                <div>
                  <p className="text-7xl">☕🎮✨</p>

                  <p className="mt-6 text-3xl font-black text-zinc-800">
                    3rd Cafe
                  </p>

                  <p className="mt-2 text-zinc-600">
                    ここに店舗写真やメインビジュアルを配置
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm font-bold text-zinc-500">
                OPEN
              </p>

              <p className="text-2xl font-black text-orange-600">
                14:00〜22:00
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-16"
      >
        <div className="mb-10 text-center">
          <p className="font-bold text-orange-600">
            ABOUT
          </p>

          <h2 className="mt-2 text-4xl font-black">
            3rd Cafeについて
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-600">
            ただ飲食するだけではなく、
            人・デジタル・アートが自然につながる場所を目指しています。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {features.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-orange-100 bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  {item.icon}
                </div>

                <h3 className="text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold text-orange-600">
                MENU
              </p>

              <h2 className="mt-2 text-4xl font-black">
                メニュー
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-zinc-600">
                価格・内容は仮です。正式メニューに合わせて差し替えできます。
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-full border-orange-200"
            >
              全メニューを見る
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {menuItems.map((item) => (
              <Card
                key={item.name}
                className="overflow-hidden rounded-3xl border-orange-100 shadow-sm"
              >
                <div className="flex aspect-square items-center justify-center bg-orange-50 text-6xl">
                  🍽️
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-black">
                      {item.name}
                    </h3>

                    <p className="font-black text-orange-600">
                      {item.price}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SPACE */}
      <section
        id="space"
        className="mx-auto max-w-7xl px-5 py-16"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-700 p-8 text-white shadow-xl">
            <Gamepad2 className="h-10 w-10 text-orange-300" />

            <h2 className="mt-6 text-4xl font-black">
              eスポーツエリア
            </h2>

            <p className="mt-4 leading-8 text-zinc-200">
              ゲーミングPCを活用し、
              ゲーム体験・イベント・配信など、
              さまざまな楽しみ方ができるスペースです。
            </p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-purple-100 to-pink-100 p-8 shadow-xl">
            <Sparkles className="h-10 w-10 text-purple-600" />

            <h2 className="mt-6 text-4xl font-black">
              アバター接客
            </h2>

            <p className="mt-4 leading-8 text-zinc-700">
              Live2Dなどのデジタル技術を取り入れた、
              3rd Cafeらしい新しい接客体験を展開予定です。
            </p>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" className="bg-orange-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="font-bold text-orange-600">
              ACCESS
            </p>

            <h2 className="mt-2 text-4xl font-black">
              店舗情報
            </h2>

            <div className="mt-8 space-y-5 rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 text-orange-500" />

                <div>
                  <p className="font-black">住所</p>

                  <p className="mt-1 text-zinc-600">
                    〒460-0024
                    愛知県名古屋市中区正木3丁目13-9
                    BS金山ビル1F
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 text-orange-500" />

                <div>
                  <p className="font-black">営業時間</p>

                  <p className="mt-1 text-zinc-600">
                    14:00〜22:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 text-orange-500" />

                <div>
                  <p className="font-black">
                    お問い合わせ
                  </p>

                  <p className="mt-1 text-zinc-600">
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-sm">
            <div>
              <MapPin className="mx-auto h-14 w-14 text-orange-400" />

              <p className="mt-4 text-2xl font-black">
                Google Map 埋め込み予定
              </p>

              <p className="mt-2 text-zinc-500">
                正式な住所が決まったら地図を差し込みます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-black">
              3rd Cafe
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Cafe / eSports / Avatar / Art
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-300">
            <Mail className="h-5 w-5" />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-7xl text-xs text-zinc-500">
          © 2026 3rd Cafe. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}