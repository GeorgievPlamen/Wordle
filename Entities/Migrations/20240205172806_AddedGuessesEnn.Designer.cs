﻿// <auto-generated />
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Entities.Migrations
{
    [DbContext(typeof(WordleDbContext))]
    [Migration("20240205172806_AddedGuessesEnn")]
    partial class AddedGuessesEnn
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("Entities.GuessesEn", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Fifth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("First")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Fourth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Second")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Sixth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Third")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId");

                    b.ToTable("GuessesEn");
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