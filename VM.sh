alias vm="/usr/bin/qemu-system-x86_64 \
    -monitor stdio \
    -machine accel=kvm \
    -m 4096 \
    -cpu host,+aes,+ssse3 \
    -smp 8 \
    -drive file=/goinfre/$USER/ubuntu.img,if=virtio,cache=none,aio=threads \
    -boot once=c,menu=off \
    -netdev user,id=vmnic,hostfwd=tcp::25565-:25565 \
    -device virtio-net-pci,netdev=vmnic \
    -rtc base=localtime \
    -name Ubuntu \
    -vga virtio \
    -display gtk,gl=on,grab-on-hover=on,full-screen=on,show-cursor=on"
alias vmi=" \
    IMG_FILE=/goinfre/$USER/ubuntu.img; \
    ISO_FILE=/goinfre/$USER/ubuntu.iso; \
    if [ ! -f \$IMG_FILE ]; then \
        qemu-img create -f qcow2 \$IMG_FILE 30G; \
    fi; \
    /usr/bin/qemu-system-x86_64 \
    -boot d \
    -machine accel=kvm \
    -cdrom \$ISO_FILE \
    -m 4096 \
    -cpu host \
    -smp 8 \
    -net nic \
    -net user \
    -drive file=\$IMG_FILE,format=qcow2 \
    -vga virtio \
    -display gtk,gl=on,grab-on-hover=on,full-screen=on,show-cursor=on"

