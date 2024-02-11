﻿// <auto-generated />
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Entities.Migrations
{
    [DbContext(typeof(WordleDbContext))]
    partial class WordleDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("Entities.GuessesEn", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<int>("FailedBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FailedEn")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Fifth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FifthBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("First")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FirstBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Fourth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FourthBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Second")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SecondBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Sixth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SixthBg")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Third")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ThirdBg")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId");

                    b.ToTable("GuessesEn");
                });

            modelBuilder.Entity("Entities.GuessesToday", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FifthGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("FifthGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("FourthGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("FourthGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("SecondGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("SecondGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("SixthGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("SixthGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("ThirdGuess")
                        .HasColumnType("TEXT");

                    b.Property<string>("ThirdGuessBg")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<int>("attempt")
                        .HasColumnType("INTEGER");

                    b.Property<int>("attemptBg")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("GuessesToday");
                });

            modelBuilder.Entity("Entities.WordBg", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("WordsBg");
                });

            modelBuilder.Entity("Entities.WordEn", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("WordsEn");
                });
#pragma warning restore 612, 618
        }
    }
}
