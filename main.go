package main

import "fmt"
import "net/http"
import "os/exec"
import "log"

func main() {
	http.HandleFunc("/host_id", ReturnUUID) 
	http.ListenAndServe(":8080", nil)
}

func ReturnUUID(w http.ResponseWriter, r *http.Request) {
	newUUID, err := exec.Command("uuidgen").Output()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintf(w, "UUID: %s", newUUID)
}
