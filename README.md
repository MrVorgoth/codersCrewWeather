Czwarte wasze zadanie to stworzenie prostej apki pogodowej z wykorzystaniem API. Przygotowałem dla was minimalny setup na start - oczywiście możecie dostosować go wg swoich potrzeb. Pracujecie w zespole i wszystko wrzucacie na githuba.

1) Link do mockupu apki pogodowej dostaniecie na Trello. Do katalogu assets wrzucajcie wszystkie potrzebne wam zdjęcia

2) Na Trello będziecie mieli również dostęp do tasków (podzielę mockup tak, żeby każdy dostał w miarę uczciwy kawałek pracy do wykonania), tam musicie sobie wybrać ten, który was interesuję i "zaklepać go", czyli przerzucić zadanie z kolumny "To do" do kolumny "Doing" wraz ze swoim avatarem

3) Będziecie pracować z API: https://openweathermap.org/api, a konkretnie z "5 day / 3 hour forecast". Musicie się na tej stronie zarejestować, a w swoim panelu w zakładce API Keys podać nową nazwę klucza np. "Weather" i kliknąć generate - to wygeneruję wam nowy klucz dostępu.

4) Następnie możecie się komunikować z API pod tym linkiem:
https://openweathermap.org/data/2.5/forecast?q=Wroclaw,pl&appid=5e0aa7c89f38ebce4a7f541a285c7c24

Dla uproszczenia nie będziemy tworzyć pól, z których normalnie odczytywalibyśmy nazwę miasta i kod np. "Wroclaw", "pl", czyli dane będą ustawione na sztywno -> na koniec, jak zostanie czas będziemy mogli to dodać
WAŻNE: jako appid=... musicie podać swój wygenerowany kod do API z punktu 3.